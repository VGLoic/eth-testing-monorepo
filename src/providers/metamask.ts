import { Provider } from "./provider";

class MockInternalMetaMask {
  public isUnlocked() {
    return true;
  }
}

export class MetaMaskProvider extends Provider {
  public isMetaMask = true;
  public _metamask = new MockInternalMetaMask();

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
