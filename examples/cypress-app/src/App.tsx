import { useState } from "react";
import "./App.css";
import { getWalletInfo, isMetaMaskInstalled } from "./utils/metamask";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [walletInfo, setWalletInfo] = useState<{
    balance: string;
    account: string;
    chainId: string;
  } | null>(null);

  const onConnect = async () => {
    setLoading(true);
    try {
      const { account, balance, chainId } = await getWalletInfo();
      setError(null);
      setWalletInfo({ account, balance, chainId });
    } catch (error) {
      console.error(error);
      setError(`Unexpected error happened: ${JSON.stringify(error)}`);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/cypress.svg" className="logo" alt="Cypress logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src="/ethereum.svg" className="logo" alt="eth-testing logo" />
        </a>
      </div>
      <h1>Cypress + eth-testing</h1>
      <div className="card">
        {isMetaMaskInstalled() ? (
          <button onClick={onConnect}>Connect Wallet</button>
        ) : (
          <a
            href="https://metamask.io/download/"
            target="_blank"
            rel="noreferrer"
          >
            Click here to install MetaMaskk
          </a>
        )}

        <div>
          {loading ? (
            <p>Lodaing...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            walletInfo && (
              <div>
                <p>Address: {walletInfo.account}</p>
                <p>Balance: {walletInfo.balance}</p>
                <p>Chain ID: {walletInfo.chainId}</p>
              </div>
            )
          )}
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
