import * as React from "react";
import useWallet from "./use-wallet";
import "./header.css";

function Header() {
  const { account, chainId, balance } = useWallet();

  return (
    <div className="header">
      <div>Account: {account}</div>
      <div>Chain ID: {chainId}</div>
      <div>Balance: {(Number(balance) / 10**18).toFixed(2)}</div>
    </div>
  );
}

export default Header;
