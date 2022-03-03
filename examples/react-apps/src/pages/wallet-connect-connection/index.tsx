import * as React from "react";
import { getWalletConnectProvider } from "./provider";
import Wallet from "./wallet";

function WalletConnectConnection() {
  const [connected, setConnected] = React.useState(false);

  const connect = async () => {
    const provider = getWalletConnectProvider();
    await provider.enable();
    setConnected(true);
  };

  if (!connected) {
    return <button onClick={connect}>Connect</button>;
  }

  return <Wallet />;
}

export default WalletConnectConnection;
