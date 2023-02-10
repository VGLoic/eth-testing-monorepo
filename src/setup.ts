import {
  MetaMaskProvider,
  WalletConnectProvider,
  Provider,
  CoinbaseProvider,
  VerboseArgs,
  ProviderType,
  WalletConnectEthereumProvider,
  WalletConnectUniversalProvider,
} from "./providers";
import { TestingUtils } from "./testing-utils";

type GenerateOptions = {
  providerType?: ProviderType;
  verbose?: VerboseArgs;
};

const defaultGenerationOptions: GenerateOptions = {
  providerType: "default",
  verbose: false,
};

/**
 * Generate the testing utils associated with a mock provider
 * @param options.providerType Type of the provider to mock, default to `default`
 * @param options.verbose Verbose configuration
 * @returns The testing utils for one provider
 */
export function generateTestingUtils({
  providerType,
  verbose,
}: GenerateOptions = defaultGenerationOptions) {
  const provider =
    providerType === "MetaMask"
      ? new MetaMaskProvider({ verbose })
      : providerType === "Coinbase"
      ? new CoinbaseProvider({ verbose })
      : providerType === "WalletConnect"
      ? new WalletConnectProvider({ verbose })
      : providerType === "WalletConnect-EthereumProvider"
      ? new WalletConnectEthereumProvider({ verbose })
      : providerType === "WalletConnect-UniversalProvider"
      ? new WalletConnectUniversalProvider({ verbose })
      : new Provider({ verbose, ethTestingProviderType: "default" });

  const testingUtils = new TestingUtils(provider);

  return testingUtils;
}
