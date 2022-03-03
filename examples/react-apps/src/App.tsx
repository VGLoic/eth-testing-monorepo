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

const routes: Route[] = [
  {
    path: "/",
    element: <div>Use the links for navigating through the examples</div>,
  },
  { path: "metamask-connection", element: <MetaMaskConnection /> },
  {
    path: "contract-interactions",
    element: <ContractInteractions />,
    children: [
      { path: "web3js", element: <Web3JsContractBox /> },
      { path: "ethers", element: <EthersContractBox /> },
    ],
  },
];

const location = new ReactLocation();

function App() {
  return (
    <Router location={location} routes={routes}>
      <div>
        <Link to="/">Home</Link>{" "}
        <Link to="metamask-connection">MetaMask Connection</Link>{" "}
        <Link to="contract-interactions">Contract interaction</Link>
      </div>
      <hr />
      <Outlet />
    </Router>
  );
}

export default App;
