import * as React from "react";

type State =
  | {
      account: null;
      chainId: null;
      balance: null;
    }
  | {
      account: string;
      chainId: string;
      balance: string;
    }
  | {
      account: null;
      chainId: string;
      balance: string;
    };

const initialState: State = {
  account: null,
  chainId: null,
  balance: null
};

type Action =
  | {
      type: "initialized";
      payload: {
        account: string;
        chainId: string;
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
        newChainId: string;
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
          chainId: state.chainId as string,
          account: action.payload.newAccounts[0],
          balance: action.payload.newBalances[0]  
        }
      }
      return {
        chainId: null,
        account: null,
        balance: null
      };
    case "chainChanged":
      return {
        ...state,
        chainId: action.payload.newChainId,
        balance: action.payload.newBalance
      };
    default:
      return state;
  }
}

function useWallet() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    async function synchronizeWallet() {
      const ethereum = (window as any).ethereum;
      const [account] = await ethereum.request({ method: "eth_accounts" }) as [string];
      const chainId = await ethereum.request({ method: "eth_chainId" }) as string;
      const balance = await ethereum.request({ method: "eth_getBalance", params: [account, "latest"] }) as string;
      dispatch({ type: "initialized", payload: { account, chainId, balance } });
    }
    synchronizeWallet();
  }, []);

  React.useEffect(() => {
    const ethereum = (window as any).ethereum;
    const onAccountChanged = async (newAccounts: string[]) => {
      if (!newAccounts[0]) {
        dispatch({
          type: "accountChanged",
          payload: { newAccounts, newBalances: [] },
        });
      }
      const balance = await ethereum.request({ method: "eth_getBalance", params: [newAccounts[0], "latest"] }) as string;
      dispatch({
        type: "accountChanged",
        payload: { newAccounts, newBalances: [balance] },
      });
    }
    ethereum.on("accountsChanged", onAccountChanged);
    return () => ethereum.removeListener("accountsChanged", onAccountChanged);
  }, []);

  React.useEffect(() => {
    const ethereum = (window as any).ethereum;
    const onChainChanged = async (newChainId: string) => {
      if (!state.account) {
        dispatch({
          type: "chainChanged",
          payload: { newChainId, newBalance: '0x' },
        });
      }
      const balance = await ethereum.request({ method: "eth_getBalance", params: [state.account, "latest"] }) as string;
      dispatch({
        type: "chainChanged",
        payload: { newChainId, newBalance: balance },
      });
    }
    ethereum.on("chainChanged", onChainChanged);
    return () => ethereum.removeListener("chainChanged", onChainChanged);
  }, [state.account]);

  return state;
}

export default useWallet;
