import { Fragment, JsonFragment } from "@ethersproject/abi";
import { MetaMaskProvider } from "./metamask";
import { WalletConnectProvider } from "./wallet-connect";
import { Provider } from "./provider";
import { MockManager } from "./mock-manager";
import { ContractUtils } from "./contract-utils";

type MockRequestAccountsOptions = {
  chainId?: string;
  triggerCallback?: () => void;
}

type SetupOptions = {
  providerType: "MetaMask" | "WalletConnect" | "default";
  verbose?: boolean;
};

const defaultSetupOptions: SetupOptions = {
  providerType: "default",
  verbose: false
};

export function setupEthTesting({ providerType, verbose }: SetupOptions = defaultSetupOptions) {
  const provider =
    providerType === "MetaMask"
      ? new MetaMaskProvider({ verbose })
      : providerType === "WalletConnect"
      ? new WalletConnectProvider({ verbose })
      : new Provider({ verbose });

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
   * Mock the next eth_requestAccounts request and persistently mock the accounts once the latter request has been triggered
   * @param accounts Resolved accounts
   * @param options.chainId If present, the chain ID will also be mocked with this value once the request has been triggered
   * @param options.triggerCallback Optional additional callback to be triggered with the request. The existing callback will at least mock the eth_accounts
   * @example
   * ```ts
   * // The next eth_requestAccounts request will return the array of address and be set on MainNet
   * testingUtils.mockRequestAccounts(["0x138071e4e810f34265bd833be9c5dd96f01bd8a5"], { chainId: "0x1" });
   * ```
   */
  const mockRequestAccounts = (accounts: string[], options: MockRequestAccountsOptions = {}) => {
    const completedTriggerCallback = () => {
      mockManager.mockRequest("eth_accounts", accounts, { persistent: true });
      if (options.chainId) mockManager.mockRequest("eth_chainId", options.chainId, { persistent: true });
      if (options.triggerCallback) options.triggerCallback();
    }
    mockManager.mockRequest("eth_requestAccounts", accounts, { triggerCallback: completedTriggerCallback });
  };

  const generateContractUtils = (abi: (string | JsonFragment | Fragment)[]) =>
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
