import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setupEthTesting } from "../../../../../src";
import { ABI } from "constants/storage-contract";
import EthersContractBox from "../ethers-contract-box";
import Web3JsContractBox from "../web3js-contract-box";

describe("ContractBox", () => {
  let originalEthereum: any;
  const { provider, testingUtils } = setupEthTesting({
    providerType: "MetaMask"
  });

  beforeAll(() => {
    originalEthereum = (global.window as any).ethereum;
    (global.window as any).ethereum = provider;
  });

  afterAll(() => {
    (global.window as any).ethereum = originalEthereum;
  });

  beforeEach(() => {
    testingUtils.mockConnectedWallet(["0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"]);
  });

  afterEach(() => {
    testingUtils.clearAllMocks();
  });

  const components = [
    EthersContractBox,
    Web3JsContractBox
  ];

  components.forEach((ContractBoxComponent, index) => {
    const isWeb3JS = index === 1;
    test(`with component ${ContractBoxComponent.name}, the value of the contract is displayed and up to date`, async () => {
      const contractTestingUtils = testingUtils.generateContractUtils(ABI);

      contractTestingUtils.mockCall("value", ["100"]);
      contractTestingUtils.mockGetLogs("ValueUpdated", [["0"], ["12"]]);

      if (isWeb3JS) {
        testingUtils.mockSubscribe("0x123");
      }

      render(<ContractBoxComponent />);

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
        if (isWeb3JS) {
          contractTestingUtils.mockEmitLog("ValueUpdated", ["14"], "0x123")
        } else {
          contractTestingUtils.mockEmitLog("ValueUpdated", ["14"])
        }
      });

      await screen.findByText(/previous value: 14/i, undefined, { timeout: 4500 });
    });
  });
});
