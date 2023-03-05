import { Provider, VerboseArgs } from './provider.js';
import 'events';
import '../types.js';

type ProviderConstructorArgs = {
    verbose?: VerboseArgs;
};
declare class WalletConnectProvider extends Provider {
    constructor({ verbose }: ProviderConstructorArgs);
    disconnect(): Promise<void>;
    enable(): Promise<string[]>;
}

export { WalletConnectProvider };
