import * as React from "react";
import {
  ReactLocation,
  Router,
  Route,
  Link,
  Outlet,
} from "@tanstack/react-location";
import MetaMaskConnection from "pages/metamask-connection";
import ContractInteractions from "pages/contract-interactions";
import {
  EthersContractBox,
  Web3JsContractBox,
} from "pages/contract-interactions/contract-box";
import EnsStuff from "pages/ens";
import WalletConnectConnection from "pages/wallet-connect-connection";
import Web3ReactPage from "pages/web3-react";
import WagmiPage from "pages/wagmi";

const routes: Route[] = [
  {
    path: "/",
    element: <div>Use the links for navigating through the examples</div>,
  },
  { path: "metamask-connection", element: <MetaMaskConnection /> },
  { path: "wallet-connect-connection", element: <WalletConnectConnection /> },
  {
    path: "contract-interactions",
    element: <ContractInteractions />,
    children: [
      { path: "web3js", element: <Web3JsContractBox /> },
      { path: "ethers", element: <EthersContractBox /> },
    ],
  },
  { path: "ens", element: <EnsStuff /> },
  { path: "web3-react", element: <Web3ReactPage /> },
  { path: "wagmi", element: <WagmiPage /> },
];

const location = new ReactLocation();

function App() {
  return (
    <Router location={location} routes={routes}>
      <div>
        <Link style={{ marginRight: "10px" }} to="/">Home</Link>{" "}
        <Link style={{ marginRight: "10px" }} to="metamask-connection">MetaMask Connection</Link>{" "}
        <Link style={{ marginRight: "10px" }} to="wallet-connect-connection">Wallet Connect Connection</Link>{" "}
        <Link style={{ marginRight: "10px" }} to="contract-interactions">Contract interaction</Link>{" "}
        <Link style={{ marginRight: "10px" }} to="ens">ENS</Link>
        <Link style={{ marginRight: "10px" }} to="web3-react">Web3 React</Link>
        <Link style={{ marginRight: "10px" }} to="wagmi">Wagmi</Link>
      </div>
      <hr />
      <Outlet />
    </Router>
  );
}

export default App;
