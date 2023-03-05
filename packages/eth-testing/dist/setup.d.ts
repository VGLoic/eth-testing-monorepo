import { ProviderType, VerboseArgs } from './providers/provider.js';
import { TestingUtils } from './testing-utils/testing-utils.js';
import 'events';
import './types.js';
import './mock-manager.js';
import './json-rpc-methods-types.js';
import './testing-utils/contract-utils.js';
import '@ethersproject/abi';
import 'abitype';
import './testing-utils/ens-utils/index.js';
import 'ethers/lib/utils';

type GenerateOptions = {
    providerType?: ProviderType;
    verbose?: VerboseArgs;
};
/**
 * Generate the testing utils associated with a mock provider
 * @param options.providerType Type of the provider to mock, default to `default`
 * @param options.verbose Verbose configuration
 * @returns The testing utils for one provider
 */
declare function generateTestingUtils({ providerType, verbose, }?: GenerateOptions): TestingUtils;

export { generateTestingUtils };
