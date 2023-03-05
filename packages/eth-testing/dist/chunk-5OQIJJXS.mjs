import {
  Provider
} from "./chunk-5OMH6ZLX.mjs";

// src/providers/metamask.ts
var MockInternalMetaMask = class {
  isUnlocked() {
    return true;
  }
};
var MetaMaskProvider = class extends Provider {
  constructor({ verbose }) {
    super({ verbose, ethTestingProviderType: "MetaMask" });
    this.isMetaMask = true;
    this._metamask = new MockInternalMetaMask();
  }
  send(methodOrPayload, params) {
    if (typeof methodOrPayload === "string") {
      return this.request({ method: methodOrPayload, params });
    } else {
      return this.request({
        method: methodOrPayload.method,
        params: methodOrPayload.params
      });
    }
  }
};

export {
  MetaMaskProvider
};
