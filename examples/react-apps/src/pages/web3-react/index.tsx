import * as React from "react";
import { ethers } from "ethers";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

const connector = new InjectedConnector({});

function Web3ReactPage() {
  return (
    <Web3ReactProvider getLibrary={(p) => new ethers.providers.Web3Provider(p)}>
      <Example />
    </Web3ReactProvider>
  );
}

function Example() {
  const { activate, account, library } = useWeb3React();

  const [signature, setSignature] = React.useState("");

  const sign = async () => {
    if (!library) {
      throw new Error("Oh no, it's broken :(");
    }
    const signer = library.getSigner();
    const signature = await signer.signMessage("hello");
    setSignature(signature);
  };

  return (
    <div>
      <button onClick={() => activate(connector)}>Connect</button>
      {account ? <div>Account: {account}</div> : null}
      {account ? (
        <div>
          <button onClick={sign}>Sign message</button>
          {signature ? <div>Signature: {signature}</div> : null}
        </div>
      ) : null}
    </div>
  );
}

export default Web3ReactPage;
