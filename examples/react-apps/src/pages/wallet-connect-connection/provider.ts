import WalletConnectProvider from "@walletconnect/web3-provider";

const provider = new WalletConnectProvider({
    infuraId: process.env.REACT_APP_INFURA_KEY,
});

export function getWalletConnectProvider() {
    return provider;
}