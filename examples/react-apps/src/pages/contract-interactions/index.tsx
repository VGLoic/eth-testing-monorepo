import * as React from "react";
import { Link, Outlet } from "@tanstack/react-location";

function ContractInteractions() {
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
    return (
      <div>
        <div>
          You need to be connected before interacting with the contracts
        </div>
        <button onClick={connect}>Connect</button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Link to="ethers">Ethers</Link> <Link to="web3js">Web3.js</Link>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}

export default ContractInteractions;
