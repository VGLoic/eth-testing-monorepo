import {
  TestingUtils
} from "./chunk-42M4MR5S.mjs";
import {
  MetaMaskProvider
} from "./chunk-5OQIJJXS.mjs";
import {
  WalletConnectProvider
} from "./chunk-MVDKZ5GX.mjs";
import {
  CoinbaseProvider
} from "./chunk-NMOZ7YHK.mjs";
import {
  Provider
} from "./chunk-5OMH6ZLX.mjs";

// src/setup.ts
var defaultGenerationOptions = {
  providerType: "default",
  verbose: false
};
function generateTestingUtils({
  providerType,
  verbose
} = defaultGenerationOptions) {
  const provider = providerType === "MetaMask" ? new MetaMaskProvider({ verbose }) : providerType === "Coinbase" ? new CoinbaseProvider({ verbose }) : providerType === "WalletConnect" ? new WalletConnectProvider({ verbose }) : new Provider({ verbose, ethTestingProviderType: "default" });
  const testingUtils = new TestingUtils(provider);
  return testingUtils;
}

export {
  generateTestingUtils
};
