import { render, screen, waitFor, act } from "@testing-library/react";
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

    render(<Header />);

    const accountElement = screen.getByText(/account/i);
    const chainIdElement = screen.getByText(/chain id/i);

    expect(accountElement).toHaveTextContent("Account:");
    expect(chainIdElement).toHaveTextContent("Chain ID:");

    await waitFor(() => {
      expect(accountElement).toHaveTextContent(
        "Account: 0x138071e4e810f34265bd833be9c5dd96f01bd8a5"
      );
      expect(chainIdElement).toHaveTextContent("Chain ID: 0x1");
    });

    act(() => {
      testingUtils.mockChainChanged("0x2");
    });
    expect(chainIdElement).toHaveTextContent("Chain ID: 0x2");

    act(() => {
      testingUtils.mockAccountsChanged([
        "0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf",
      ]);
    });
    expect(accountElement).toHaveTextContent(
      "Account: 0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"
    );
  });
});
