import { useState } from "react";
import "./App.css";
import { isMetaMaskInstalled } from "./utils/metamask";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [accounts, setAccounts] = useState<string[]>([]);

  const onConnect = async () => {
    setLoading(true);
    try {
      const { ethereum } = window as any;
      const result = await ethereum.request({ method: "eth_requestAccounts" });
      setAccounts(result);
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
            <ul>
              {accounts.map((acc, idx) => (
                <li key={acc}>
                  Account({idx + 1}): {acc}
                </li>
              ))}
            </ul>
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
