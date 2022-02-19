import { MetaMaskProvider } from "./metamask";
import { WalletConnectProvider } from "./wallet-connect";
import { Provider } from "./provider";
import { MockManager } from "./mock-manager";
import { TestingUtils } from "./testing-utils";

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

  return {
    provider,
    testingUtils: new TestingUtils(mockManager),
  };
}
