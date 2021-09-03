import * as React from "react";

type State =
  | {
      account: null;
      chainId: null;
    }
  | {
      account: string;
      chainId: string;
    }
  | {
      account: null;
      chainId: string;
    };

const initialState: State = {
  account: null,
  chainId: null,
};

type Action =
  | {
      type: "initialized";
      payload: {
        account: string;
        chainId: string;
      };
    }
  | {
      type: "accountChanged";
      payload: {
        newAccounts: string[];
      };
    }
  | {
      type: "chainChanged";
      payload: {
        newChainId: string;
      };
    };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "initialized":
      return {
        account: action.payload.account,
        chainId: action.payload.chainId,
      };
    case "accountChanged":
      return {
        chainId: state.chainId as string,
        account: action.payload.newAccounts[0] || null,
      };
    case "chainChanged":
      return {
        ...state,
        chainId: action.payload.newChainId,
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
      const [account] = await ethereum.request({ method: "eth_accounts" });
      const chainId = await ethereum.request({ method: "eth_chainId" });
      dispatch({ type: "initialized", payload: { account, chainId } });
    }
    synchronizeWallet();
  }, []);

  React.useEffect(() => {
    const ethereum = (window as any).ethereum;
    const onAccountChanged = (newAccounts: string[]) =>
      dispatch({
        type: "accountChanged",
        payload: { newAccounts },
      });
    ethereum.on("accountsChanged", onAccountChanged);
    return () => ethereum.removeListener("accountsChanged", onAccountChanged);
  }, []);

  React.useEffect(() => {
    const ethereum = (window as any).ethereum;
    const onChainChanged = (newChainId: string) =>
      dispatch({
        type: "chainChanged",
        payload: { newChainId },
      });
    ethereum.on("chainChanged", onChainChanged);
    return () => ethereum.removeListener("chainChanged", onChainChanged);
  }, []);

  return state;
}

export default useWallet;
