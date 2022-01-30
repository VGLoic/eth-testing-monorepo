import { JsonFragment } from "@ethersproject/abi";
import { MetaMaskProvider } from "./metamask";
import { WalletConnectProvider } from "./wallet-connect";
import { Provider } from "./provider";
import { MockManager } from "./mock-manager";
import { ContractUtils } from "./contract-utils";
import { MockOptions } from "./types";

type SetupOptions = {
  providerType: "MetaMask" | "WalletConnect" | "default";
};

const defaultSetupOptions: SetupOptions = {
  providerType: "default",
};

export function setupEthTesting(options: SetupOptions = defaultSetupOptions) {
  const provider =
    options.providerType === "MetaMask"
      ? new MetaMaskProvider()
      : options.providerType === "WalletConnect"
      ? new WalletConnectProvider()
      : new Provider();

  const mockManager = new MockManager(provider);

  const mockChainId = (chainId: string | number) => {
    mockManager.mockRequest("eth_chainId", chainId, { persistent: true });
  };
  const mockAccounts = (accounts: string[]) => {
    mockManager.mockRequest("eth_accounts", accounts, { persistent: true });
  };

  const mockChainChanged = (newChainId: string) => {
    mockManager.mockRequest("eth_chainId", newChainId, { persistent: true });
    mockManager.emit("chainChanged", newChainId);
  };

  const mockAccountsChanged = (newAccounts: string[]) => {
    mockManager.mockRequest("eth_accounts", newAccounts, { persistent: true });
    mockManager.emit("accountsChanged", newAccounts);
  };


  /**
   * Mock the next eth_requestAccounts request
   * @param accountsOrError Resolved accounts or rejected error
   * @param mockOptions Mock options
   * @example
   * ```ts
   * // The next eth_requestAccounts request will return the array of address
   * testingUtils.mockRequestAccounts(["0x138071e4e810f34265bd833be9c5dd96f01bd8a5"]);
   * ...
   * // The next eth_requestAccounts request will fail with the error
   * const error = { code: -32002 };
   * testingUtils.mockRequestAccounts(error, { shouldThrow: true });
   * ```
   */
  const mockRequestAccounts = (accountsOrError: unknown, mockOptions?: MockOptions) => {
    mockManager.mockRequest("eth_requestAccounts", accountsOrError, mockOptions);
  };

  const generateContractUtils = (abi: JsonFragment[]) =>
    new ContractUtils(mockManager, abi);

  return {
    provider,
    testingUtils: {
      mockChainId,
      mockAccounts,
      mockChainChanged,
      mockAccountsChanged,
      mockRequestAccounts,
      clearAllMocks: mockManager.clearAllMocks.bind(
        mockManager
      ) as MockManager["clearAllMocks"],
      lowLevel: {
        emit: mockManager.emit.bind(mockManager) as MockManager["emit"],
        mockRequest: mockManager.mockRequest.bind(
          mockManager
        ) as MockManager["mockRequest"],
      },
    },
    generateContractUtils,
  };
}
