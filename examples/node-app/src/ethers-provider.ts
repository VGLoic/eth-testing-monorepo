import { ethers } from "ethers";

export function deriveProvider() {
  const nodeUrl = process.env.MAINNET_NODE_URL;
  if (!nodeUrl) {
    throw new Error(
      "Unable to find node URL in environment, it should be provided for the key `MAINNET_NODE_URL`"
    );
  }
  const provider = new ethers.providers.StaticJsonRpcProvider(nodeUrl, 1);
  return provider;
}
