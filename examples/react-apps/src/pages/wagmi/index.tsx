import * as React from 'react';
import { configureChains, createClient, defaultChains, useAccount, useBalance, useConnect, useNetwork, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public'
import { InjectedConnector } from 'wagmi/connectors/injected';

function WagmiPage() {
    const { provider } = configureChains(defaultChains, [publicProvider()]);


    const client = createClient({
        autoConnect: true,
        provider,
    });
    return (
        <WagmiConfig client={client}>
            <Example />
        </WagmiConfig>
    )
}

export function Example() {
    const { address, isConnected } = useAccount();
    const { chain } = useNetwork();
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })
    const { data } = useBalance({
        addressOrName: address,
        enabled: isConnected,
    });
      
      if (!isConnected) {
        return <button onClick={() => connect()}>Connect</button>
      }

      return (
        <div>
            <div>Account: {address}</div>
            <div>Chain ID: {chain?.id}</div>
            <div>Balance: {data?.formatted}</div>
        </div>
      )
}

export default WagmiPage;