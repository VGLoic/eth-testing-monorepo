import {
  Provider
} from "./chunk-5OMH6ZLX.mjs";

// src/providers/wallet-connect.ts
var WalletConnectProvider = class extends Provider {
  constructor({ verbose }) {
    super({ verbose, ethTestingProviderType: "WalletConnect" });
  }
  async disconnect() {
    return;
  }
  async enable() {
    return this.request({
      method: "eth_accounts",
      params: []
    });
  }
};

export {
  WalletConnectProvider
};
