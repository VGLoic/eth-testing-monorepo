import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setupEthTesting } from "../../../../../src";
import { ABI } from "constants/storage-contract";
import EthersContractBox from "../ethers-contract-box";
import Web3JsContractBox from "../web3js-contract-box";

describe("ContractBox", () => {
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

  beforeEach(() => {
    testingUtils.mockChainId("0x1");
    testingUtils.mockAccounts(["0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"]);
  });

  afterEach(() => {
    testingUtils.clearAllMocks();
  });

  const components = [EthersContractBox, Web3JsContractBox];

  components.forEach((ContractBoxComponent) => {
    test(`with component ${ContractBoxComponent.name}, the value of the contract is displayed and up to date`, async () => {
      const contractTestingUtils = testingUtils.generateContractUtils(ABI);

      contractTestingUtils.mockCall("value", ["100"]);

      render(<ContractBoxComponent />);

      const valueElement = screen.getByText(/current value/i);
      expect(valueElement).toHaveTextContent("Current value:");
      await waitFor(() => {
        expect(valueElement).toHaveTextContent("Current value: 100");
      });

      const input = screen.getByLabelText(/value/i);
      userEvent.type(input, "123");
      expect(input).toHaveValue(123);

      contractTestingUtils.mockTransaction("setValue");

      const submitButton = screen.getByRole("button");
      userEvent.click(submitButton);
      await waitFor(() => {
        expect(submitButton).toBeDisabled();
      });

      await waitFor(() => {
        expect(valueElement).toHaveTextContent("Current value: 123");
      });
      expect(submitButton).toBeEnabled();
    });
  });
});
