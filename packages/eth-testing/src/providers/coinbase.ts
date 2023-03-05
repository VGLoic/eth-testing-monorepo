import { Provider, VerboseArgs } from "./provider";

type ProviderConstructorArgs = {
  verbose?: VerboseArgs;
};
export class CoinbaseProvider extends Provider {
  public isCoinbaseWallet = true;

  constructor({ verbose }: ProviderConstructorArgs) {
    super({ verbose, ethTestingProviderType: "Coinbase" });
  }

  public send(
    methodOrPayload: string | { method: string; params: unknown[] },
    params?: unknown[]
  ) {
    if (typeof methodOrPayload === "string") {
      return this.request({ method: methodOrPayload, params });
    } else {
      return this.request({
        method: methodOrPayload.method,
        params: methodOrPayload.params,
      });
    }
  }
}
