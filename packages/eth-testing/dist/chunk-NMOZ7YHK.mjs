import {
  Provider
} from "./chunk-5OMH6ZLX.mjs";

// src/providers/coinbase.ts
var CoinbaseProvider = class extends Provider {
  constructor({ verbose }) {
    super({ verbose, ethTestingProviderType: "Coinbase" });
    this.isCoinbaseWallet = true;
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
  CoinbaseProvider
};
