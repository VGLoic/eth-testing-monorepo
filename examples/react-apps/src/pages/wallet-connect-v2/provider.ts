import UniversalProvider from "@walletconnect/universal-provider";
import { Web3Modal } from "@web3modal/standalone";

export class Providers {
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

const providers = new Providers();

export function getProviders() {
    return providers;
}