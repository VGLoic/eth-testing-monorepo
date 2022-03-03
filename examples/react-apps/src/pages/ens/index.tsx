import { ethers } from "ethers";
import * as React from "react";

function EnsStuff() {
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
        <div>You need to be connected for this example</div>
        <button onClick={connect}>Connect</button>
      </div>
    );
  }

  return <DumbResolver />;
}

export function DumbResolver() {
  const [resolvedAddress, setResolvedAddress] = React.useState<null | string>(
    null
  );
  const [resolvedName, setResolvedName] = React.useState<null | string>(null);

  React.useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    provider
      .lookupAddress("0x0A91aEccB70C8a5d3EAAeC10fB263A5cEf44932C")
      .then((name) => setResolvedName(name));
    provider.resolveName("blabla.eth").then((addr) => setResolvedAddress(addr));
  }, []);

  return (
    <div>
      <div>Ens name 'blabla.eth' resolves to '{resolvedAddress}''</div>
      <div>
        Address '0x0A91aEccB70C8a5d3EAAeC10fB263A5cEf44932C' resolves to '
        {resolvedName}'
      </div>
    </div>
  );
}

export default EnsStuff;
