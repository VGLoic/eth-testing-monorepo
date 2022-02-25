import { MetaMaskProvider, WalletConnectProvider, Provider } from "./providers";
import { TestingUtils } from "./testing-utils";

type SetupOptions = {
  providerType: "MetaMask" | "WalletConnect" | "default";
  verbose?: boolean;
};

const defaultSetupOptions: SetupOptions = {
  providerType: "default",
  verbose: false,
};

/**
 * Set up the testing utils associated with a mock provider
 * @param options.providerType Type of the provider to mock, default to `default`
 * @param options.verbose If true, the JSON-RPC request will be logged
 * @returns The testing utils for one provider
 */
export function setupEthTesting({
  providerType,
  verbose,
}: SetupOptions = defaultSetupOptions) {
  const provider =
    providerType === "MetaMask"
      ? new MetaMaskProvider({ verbose })
      : providerType === "WalletConnect"
      ? new WalletConnectProvider({ verbose })
      : new Provider({ verbose });

  const testingUtils = new TestingUtils(provider);

  return testingUtils;
}
