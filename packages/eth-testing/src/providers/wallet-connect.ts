import { Provider, VerboseArgs } from "./provider";

type ProviderConstructorArgs = {
  verbose?: VerboseArgs;
};

export class WalletConnectProvider extends Provider {
  constructor({ verbose }: ProviderConstructorArgs) {
    super({ verbose, ethTestingProviderType: "WalletConnect" });
  }

  async disconnect() {
    return;
  }

  async enable(): Promise<string[]> {
    return this.request({
      method: "eth_accounts",
      params: [],
    }) as Promise<string[]>;
  }
}
