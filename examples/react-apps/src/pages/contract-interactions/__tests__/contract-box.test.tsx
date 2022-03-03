import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setupEthTesting } from "eth-testing";
import { ABI } from "constants/storage-contract";
import EthersContractBox from "../contract-box/ethers-contract-box";
import Web3JsContractBox from "../contract-box/web3js-contract-box";

describe("ContractBox", () => {
  let originalEthereum: any;
  const testingUtils = setupEthTesting({
    providerType: "MetaMask",
  });

  beforeAll(() => {
    originalEthereum = global.window.ethereum;
    global.window.ethereum = testingUtils.getProvider();
  });

  afterAll(() => {
    global.window.ethereum = originalEthereum;
  });

  beforeEach(() => {
    testingUtils.mockConnectedWallet([
      "0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf",
    ]);
  });

  afterEach(() => {
    testingUtils.clearAllMocks();
  });

  test(`ethers - the value of the contract is displayed and up to date`, async () => {
    const contractTestingUtils = testingUtils.generateContractUtils(ABI);

    contractTestingUtils.mockCall("value", ["100"]);
    contractTestingUtils.mockGetLogs("ValueUpdated", [["0"], ["12"]]);

    render(<EthersContractBox />);

    const valueElement = screen.getByText(/current value/i);
    expect(valueElement).toHaveTextContent("Current value:");
    await waitFor(() => {
      expect(valueElement).toHaveTextContent("Current value: 100");
    });

    expect(screen.getByText(/previous value: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/previous value: 12/i)).toBeInTheDocument();

    const input = screen.getByLabelText(/value/i);
    userEvent.type(input, "14");
    expect(input).toHaveValue(14);

    contractTestingUtils.mockTransaction("setValue");

    const submitButton = screen.getByRole("button");
    userEvent.click(submitButton);
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });

    await waitFor(() => {
      expect(valueElement).toHaveTextContent("Current value: 14");
    });
    expect(submitButton).toBeEnabled();

    act(() => {
      contractTestingUtils.mockEmitLog("ValueUpdated", ["14"]);
    });

    await screen.findByText(/previous value: 14/i, undefined, {
      timeout: 4500,
    });
  });

  test(`web3js - the value of the contract is displayed and up to date`, async () => {
    const contractTestingUtils = testingUtils.generateContractUtils(ABI);

    contractTestingUtils.mockCall("value", ["100"]);
    contractTestingUtils.mockGetLogs("ValueUpdated", [["0"], ["12"]]);

    const subscriptionID = "0x123";
    testingUtils.mockSubscribe(subscriptionID);

    render(<Web3JsContractBox />);

    const valueElement = screen.getByText(/current value/i);
    expect(valueElement).toHaveTextContent("Current value:");
    await waitFor(() => {
      expect(valueElement).toHaveTextContent("Current value: 100");
    });

    expect(screen.getByText(/previous value: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/previous value: 12/i)).toBeInTheDocument();

    const input = screen.getByLabelText(/value/i);
    userEvent.type(input, "14");
    expect(input).toHaveValue(14);

    contractTestingUtils.mockTransaction("setValue");

    const submitButton = screen.getByRole("button");
    userEvent.click(submitButton);
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });

    await waitFor(() => {
      expect(valueElement).toHaveTextContent("Current value: 14");
    });
    expect(submitButton).toBeEnabled();

    act(() => {
      contractTestingUtils.mockEmitLog("ValueUpdated", ["14"], subscriptionID);
    });

    await screen.findByText(/previous value: 14/i, undefined, {
      timeout: 4500,
    });
  });
});
