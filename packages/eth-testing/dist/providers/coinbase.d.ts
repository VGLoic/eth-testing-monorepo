import { Provider, VerboseArgs } from './provider.js';
import 'events';
import '../types.js';

type ProviderConstructorArgs = {
    verbose?: VerboseArgs;
};
declare class CoinbaseProvider extends Provider {
    isCoinbaseWallet: boolean;
    constructor({ verbose }: ProviderConstructorArgs);
    send(methodOrPayload: string | {
        method: string;
        params: unknown[];
    }, params?: unknown[]): Promise<unknown>;
}

export { CoinbaseProvider };
