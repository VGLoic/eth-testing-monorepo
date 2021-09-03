import { JsonFragment } from "@ethersproject/abi";
import { MetaMaskProvider } from "./metamask";
import { Provider } from "./provider";
import { MockManager } from "./mock-manager";
import { ContractUtils } from "./contract-utils";

type SetupOptions = {
  providerType: "MetaMask" | "default";
};

const defaultSetupOptions: SetupOptions = {
  providerType: "default",
};

export function setupEthTesting(options: SetupOptions = defaultSetupOptions) {
  const provider =
    options.providerType === "MetaMask"
      ? new MetaMaskProvider()
      : new Provider();

  const mockManager = new MockManager(provider);

  const mockChainId = (chainId: string) => {
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

  const generateContractUtils = (abi: JsonFragment[]) =>
    new ContractUtils(mockManager, abi);

  return {
    provider,
    testingUtils: {
      mockChainId,
      mockAccounts,
      mockChainChanged,
      mockAccountsChanged,
      clearAllMocks: mockManager.clearAllMocks.bind(
        mockManager
      ) as MockManager["clearAllMocks"],
      lowLevel: {
        emit: mockManager.emit.bind(mockManager) as MockManager["emit"],
        mockRequest: mockManager.mockRequest.bind(
          mockManager
        ) as MockManager["mockRequest"],
      }
    },
    generateContractUtils,
  };
}
