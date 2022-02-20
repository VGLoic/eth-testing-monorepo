import { render, screen, waitFor, act } from "@testing-library/react";
import { ethers } from "ethers";
import Web3 from "web3";
import Header from "..";
import { setupEthTesting } from "../../../../../src";

describe("Header", () => {
  let originalEthereum: any;
  const { provider, testingUtils } = setupEthTesting({
    providerType: "MetaMask",
  });
  beforeAll(() => {
    originalEthereum = (global.window as any).ethereum;
    (global.window as any).ethereum = provider;
  });
  afterAll(() => {
    (global.window as any).ethereum = originalEthereum;
  });

  afterEach(() => {
    testingUtils.clearAllMocks();
  });

  test("the wallet informations are loaded and updated when events occur", async () => {
    testingUtils.mockChainId("0x1");
    testingUtils.mockAccounts(["0x138071e4e810f34265bd833be9c5dd96f01bd8a5"]);

    testingUtils.mockBalance("0x138071e4e810f34265bd833be9c5dd96f01bd8a5", ethers.utils.parseUnits("1", "ether").toString());

    render(<Header />);

    const accountElement = screen.getByText(/account/i);
    const chainIdElement = screen.getByText(/chain id/i);
    const balanceElement = screen.getByText(/balance/i);

    expect(accountElement).toHaveTextContent("Account:");
    expect(chainIdElement).toHaveTextContent("Chain ID:");
    expect(balanceElement).toHaveTextContent("Balance:");

    await waitFor(() => {
      expect(accountElement).toHaveTextContent(
        "Account: 0x138071e4e810f34265bd833be9c5dd96f01bd8a5"
      );
      expect(chainIdElement).toHaveTextContent("Chain ID: 0x1");
      expect(balanceElement).toHaveTextContent("Balance: 1.00");
    });

    act(() => {
      testingUtils.mockBalance("0x138071e4e810f34265bd833be9c5dd96f01bd8a5", Web3.utils.toWei("2", "ether"));
      testingUtils.mockChainChanged("0x2");
    });
    await waitFor(() => expect(chainIdElement).toHaveTextContent("Chain ID: 0x2"));
    await waitFor(() => expect(balanceElement).toHaveTextContent("Balance: 2.00"));

    act(() => {
      testingUtils.mockBalance("0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf", "0x3bc16d674ec80000");
      testingUtils.mockAccountsChanged([
        "0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf",
      ]);
    });
    await waitFor(() => expect(accountElement).toHaveTextContent(
      "Account: 0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"
    ));
    await waitFor(() => expect(balanceElement).toHaveTextContent("Balance: 4.31"));
  });
});
