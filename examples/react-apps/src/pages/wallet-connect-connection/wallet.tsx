import * as React from "react";
import { getWalletConnectProvider } from "./provider";

type State =
  | {
      account: null;
      chainId: null;
      balance: null;
    }
  | {
      account: string;
      chainId: number;
      balance: string;
    }
  | {
      account: null;
      chainId: number;
      balance: string;
    };

const initialState: State = {
  account: null,
  chainId: null,
  balance: null,
};

type Action =
  | {
      type: "initialized";
      payload: {
        account: string;
        chainId: number;
        balance: string;
      };
    }
  | {
      type: "accountChanged";
      payload: {
        newAccounts: string[];
        newBalances: string[];
      };
    }
  | {
      type: "chainChanged";
      payload: {
        newChainId: number;
        newBalance: string;
      };
    };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "initialized":
      return {
        account: action.payload.account,
        chainId: action.payload.chainId,
        balance: action.payload.balance,
      };
    case "accountChanged":
      if (action.payload.newAccounts[0]) {
        return {
          chainId: state.chainId as number,
          account: action.payload.newAccounts[0],
          balance: action.payload.newBalances[0],
        };
      }
      return {
        chainId: null,
        account: null,
        balance: null,
      };
    case "chainChanged":
      return {
        ...state,
        chainId: action.payload.newChainId,
        balance: action.payload.newBalance,
      };
    default:
      return state;
  }
}

function useWallet() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    async function synchronizeWallet() {
      const provider = getWalletConnectProvider();
      const [account] = (await provider.request({
        method: "eth_accounts",
      })) as [string];
      const chainId = (await provider.request({
        method: "eth_chainId",
      })) as number;
      const balance = (await provider.request({
        method: "eth_getBalance",
        params: [account, "latest"],
      })) as string;
      dispatch({ type: "initialized", payload: { account, chainId, balance } });
    }
    synchronizeWallet();
  }, []);

  React.useEffect(() => {
    const provider = getWalletConnectProvider();
    const onAccountChanged = async (newAccounts: string[]) => {
      if (!newAccounts[0]) {
        dispatch({
          type: "accountChanged",
          payload: { newAccounts, newBalances: [] },
        });
      }
      const balance = (await provider.request({
        method: "eth_getBalance",
        params: [newAccounts[0], "latest"],
      })) as string;
      dispatch({
        type: "accountChanged",
        payload: { newAccounts, newBalances: [balance] },
      });
    };
    provider.on("accountsChanged", onAccountChanged);
    return () => provider.removeListener("accountsChanged", onAccountChanged);
  }, []);

  React.useEffect(() => {
    const provider = getWalletConnectProvider();
    const onChainChanged = async (newChainId: number) => {
      if (!state.account) {
        dispatch({
          type: "chainChanged",
          payload: { newChainId, newBalance: "0x" },
        });
      }
      const balance = (await provider.request({
        method: "eth_getBalance",
        params: [state.account, "latest"],
      })) as string;
      dispatch({
        type: "chainChanged",
        payload: { newChainId, newBalance: balance },
      });
    };
    provider.on("chainChanged", onChainChanged);
    return () => provider.removeListener("chainChanged", onChainChanged);
  }, [state.account]);

  return state;
}

function Wallet() {
  const { account, chainId, balance } = useWallet();

  return (
    <div>
      <div>Account: {account}</div>
      <div>Chain ID: {chainId}</div>
      <div>Balance: {(Number(balance) / 10 ** 18).toFixed(2)}</div>
    </div>
  );
}

export default Wallet;
