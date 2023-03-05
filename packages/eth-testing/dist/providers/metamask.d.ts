import { Provider, VerboseArgs } from './provider.js';
import 'events';
import '../types.js';

declare class MockInternalMetaMask {
    isUnlocked(): boolean;
}
type ProviderConstructorArgs = {
    verbose?: VerboseArgs;
};
declare class MetaMaskProvider extends Provider {
    isMetaMask: boolean;
    _metamask: MockInternalMetaMask;
    constructor({ verbose }: ProviderConstructorArgs);
    send(methodOrPayload: string | {
        method: string;
        params: unknown[];
    }, params?: unknown[]): Promise<unknown>;
}

export { MetaMaskProvider };
