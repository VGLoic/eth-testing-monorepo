import * as React from "react";
import useWallet from "./use-wallet";
import "./header.css";

function Header() {
  const { account, chainId } = useWallet();

  return (
    <div className="header">
      <div>Account: {account}</div>
      <div>Chain ID: {chainId}</div>
    </div>
  );
}

export default Header;
