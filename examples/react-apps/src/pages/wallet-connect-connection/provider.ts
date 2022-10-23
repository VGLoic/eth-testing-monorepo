import WalletConnectProvider from "@walletconnect/web3-provider";

const provider = new WalletConnectProvider({
  infuraId:
    process.env.REACT_APP_INFURA_KEY || "27e484dcd9e3efcfd25a83a78777cdf1",
});

export function getWalletConnectProvider() {
  return provider;
}
