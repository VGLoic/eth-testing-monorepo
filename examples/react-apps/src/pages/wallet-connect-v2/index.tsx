import UniversalProvider from "@walletconnect/universal-provider";
import { Web3Modal } from "@web3modal/standalone";
import * as React from 'react';

class Providers {
    public universalProvider?: UniversalProvider;
    public web3Modal?: Web3Modal;

    public async init() {
        const WC_PROJECT_ID = process.env.REACT_APP_WC_PROJECT_ID;
        if (!WC_PROJECT_ID) {
            throw new Error("No Wallet Connect Project ID, please set up one in the environment variable under the key `REACT_APP_WC_PROJECT_ID`")
        }

        this.universalProvider = await UniversalProvider.init({
            logger: 'info',
            projectId: WC_PROJECT_ID,
            relayUrl: 'wss://relay.walletconnect.org'
        });
        this.web3Modal = new Web3Modal({ projectId: WC_PROJECT_ID, walletConnectVersion: 2 });

        return {
            universalProvider: this.universalProvider,
            web3Modal: this.web3Modal
        }
    }

    public getUniversalProvider() {
        const provider = this.universalProvider;
        if (!provider) {
            throw new Error("Service not properly initialized")
        }
        return provider;
    }

    public getWeb3Modal() {
        const web3Modal = this.web3Modal;
        if (!web3Modal) {
            throw new Error("Service not properly initialized")
        }
        return web3Modal;
    }
}


async function initProviders(providers: Providers) {
    const { universalProvider, web3Modal } = await providers.init();

    universalProvider.on("display_uri", (uri:string) => {
        console.log('display_uri: ', uri);

        web3Modal.openModal({ uri });
    });
    
    // Subscribe to session ping
    universalProvider.on("session_ping", ({ id, topic }: any) => {
        console.log('session_ping:', id, topic);
    });
    
    // Subscribe to session event
    universalProvider.on("session_event", ({ event, chainId }: any) => {
        console.log('session_event', event, chainId);
    });
    
    // Subscribe to session update
    universalProvider.on("session_update", ({ topic, params }: any) => {
        console.log('session_update: ', topic, params);
    });
    
    // Subscribe to session delete
    universalProvider.on("session_delete", ({ id, topic }:  any) => {
        console.log('session_delete: ', id, topic);
    });
}

async function connectWallet(providers: Providers) {
    const WC_PROJECT_ID = process.env.REACT_APP_WC_PROJECT_ID;
    if (!WC_PROJECT_ID) {
        throw new Error("No Wallet Connect Project ID, please set up one in the environment variable under the key `REACT_APP_WC_PROJECT_ID`")
    }

    const universalProvider = providers.getUniversalProvider();

    const session = await universalProvider.connect({
        namespaces: {
            eip155: {
              methods: [
                "eth_sendTransaction",
                "eth_signTransaction",
                "eth_sign",
                "personal_sign",
                "eth_signTypedData",
              ],
              chains: ['eip155:1'],
              events: ["chainChanged", "accountsChanged"],
              rpcMap: {
                1: `https://rpc.walletconnect.com?chainId=eip155:1&projectId=${WC_PROJECT_ID}`,
              },
            },
          },
    });
    console.log("session: ", session);

    const accounts = await universalProvider.enable();
    console.log("accounts: ", accounts);

    providers.getWeb3Modal().closeModal();
}

const providers = new Providers();

function WalletConnectV2Connection() {
    const [connected, setConnected] = React.useState(false);

    React.useEffect(() => {
        initProviders(providers);
    }, [])

    const connect = async () => {
        await connectWallet(providers);
        setConnected(true)
    }

    if (!connected) {
        return <button onClick={connect}>Connect</button>
    }
    
    return (
        <div>
            Connected!
        </div>
    )
}

export default WalletConnectV2Connection;