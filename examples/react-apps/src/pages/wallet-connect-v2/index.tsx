import * as React from 'react';
import { getProviders, Providers } from './provider';


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

    return {
        chainId: 1,
        account: accounts[0]
    }
}

type State = {
    status: 'initializing';
    account: null;
    chainId: null;
} | {
    status: 'connecting';
    account: null;
    chainId: null;
} | {
    status: 'connected';
    account: string;
    chainId: number;
} | {
    status: 'notConnected';
    account: null;
    chainId: null;
}

type Action =
  | {
      type: "connected";
      payload: {
        account: string;
        chainId: number;
      };
    }
  | {
      type: "accountChanged";
      payload: {
        account: string;
      };
    }
  | {
      type: "chainChanged";
      payload: {
        chainId: number;
      };
    }
  | {
      type: "disconnected";
    }
  | {
      type: "initialized";
    };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "initialized":
            return {
                status: 'notConnected',
                account: null,
                chainId: null
            }
        case "connected":
            return {
                status: 'connected',
                account: action.payload.account,
                chainId: action.payload.chainId
            }
        case "accountChanged":
            if (state.status !== 'connected') return state;
            return {
                ...state,
                account: action.payload.account
            }
        case "chainChanged":
            if (state.status !== 'connected') return state;
            return {
                ...state,
                chainId: action.payload.chainId
            }
        case "disconnected":
            return {
                status: 'notConnected',
                account: null,
                chainId: null
            }
    }
}

const initialState: State = {
    status: 'initializing',
    account: null,
    chainId: null
}

const providers = getProviders();

function WalletConnectV2Connection() {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        initProviders(providers).then(() => dispatch({ type: 'initialized' }));
    }, [])

    const connect = async () => {
        if (state.status !== 'notConnected') {
            throw new Error(`'connect' is only callable during status 'notConnected', got status ${state.status}`)
        }
        try {
            const { chainId, account } = await connectWallet(providers);
            dispatch({ type: 'connected', payload: { account, chainId } });

            // REMIND ME: clarify event subscription
        } catch (err) {
            console.error(err);
            dispatch({ type: 'initialized' });
        }
    }

    if (state.status === 'initializing') return null;

    if (state.status === 'notConnected') {
        return <button onClick={connect}>Connect</button>
    }
    
    if (state.status === 'connecting') return <div>Connecting...</div>

    return (
        <div>
            <h1>Connected!</h1>
            <div>
                <div>Account: {state.account}</div>
                <div>Chain ID: {state.chainId}</div>
            </div>
        </div>
    )
}

export default WalletConnectV2Connection;