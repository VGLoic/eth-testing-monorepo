import { Provider, VerboseArgs } from "./provider";

class MockInternalMetaMask {
  public isUnlocked() {
    return true;
  }
}

type ProviderConstructorArgs = {
  verbose?: VerboseArgs;
};

export class MetaMaskProvider extends Provider {
  public isMetaMask = true;
  public _metamask = new MockInternalMetaMask();

  constructor({ verbose }: ProviderConstructorArgs) {
    super({ verbose, ethTestingProviderType: "MetaMask" });
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
