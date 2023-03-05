import EventEmitter from 'events';
import { MockRequest } from '../types.js';

type VerboseConfiguration = {
    methods?: string[];
    dismissMocked?: boolean;
    dismissNotMocked?: boolean;
};
type VerboseArgs = boolean | VerboseConfiguration;
type ProviderType = "MetaMask" | "Coinbase" | "WalletConnect" | "default";
type ProviderConstructorArgs = {
    verbose?: VerboseArgs;
    ethTestingProviderType: ProviderType;
};
declare class Provider extends EventEmitter {
    ethTestingProviderType: ProviderType;
    requestMocks: Record<string, MockRequest[]>;
    verbose: VerboseConfiguration;
    constructor({ verbose, ethTestingProviderType }: ProviderConstructorArgs);
    request({ method, params, }: {
        method: string;
        params?: unknown[];
    }): Promise<unknown>;
    private findMock;
    private logRequest;
}

export { Provider, ProviderType, VerboseArgs };
