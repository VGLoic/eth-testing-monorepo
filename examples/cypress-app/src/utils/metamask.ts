import { ethers } from "ethers";

export const isMetaMaskInstalled = () => {
  const { ethereum } = window as any;
  return Boolean(ethereum && ethereum.isMetaMask);
};

export const getWalletInfo = async (): Promise<{
  provider: ethers.BrowserProvider;
  signer: ethers.JsonRpcSigner;
  account: string;
  balance: string;
  chainId: string;
}> => {
  const { ethereum } = window as any;
  const provider = new ethers.BrowserProvider(ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = await provider.getSigner();
  const address = await signer.getAddress();

  const [balance, network] = await Promise.all([
    provider.getBalance(address),
    provider.getNetwork(),
  ]);

  return {
    provider,
    signer,
    account: address,
    balance: ethers.formatEther(balance),
    chainId: network.chainId.toString(),
  };
};
