import Web3 from "web3";

export function deriveProvider() {
  const nodeUrl = process.env.MAINNET_NODE_URL;
  if (!nodeUrl) {
    throw new Error(
      "Unable to find node URL in environment, it should be provided for the key `MAINNET_NODE_URL`"
    );
  }
  return new Web3.providers.HttpProvider(nodeUrl);
}
