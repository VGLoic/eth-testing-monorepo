import * as React from "react";
import Homepage from "pages/homepage";

function App() {
  const [connected, setConnected] = React.useState(false);

  const connect = async () => {
    const ethereum = (window as any).ethereum;
    if (!ethereum || !ethereum.isMetaMask) return;
    await ethereum.request({
      method: "eth_requestAccounts",
    });
    setConnected(true);
  };

  if (!connected) {
    return <button onClick={connect}>Connect</button>;
  }

  return <Homepage />;
}

export default App;
