import * as React from "react";
import Wallet from "./wallet";

function MetaMaskConnection() {
  const [connected, setConnected] = React.useState(false);

  const connect = async () => {
    const ethereum = window.ethereum;
    if (!ethereum || !ethereum.isMetaMask) return;
    await ethereum.request({
      method: "eth_requestAccounts",
    });
    setConnected(true);
  };

  if (!connected) {
    return <button onClick={connect}>Connect</button>;
  }

  return <Wallet />;
}

export default MetaMaskConnection;
