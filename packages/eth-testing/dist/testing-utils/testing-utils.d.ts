import { MockManager } from '../mock-manager.js';
import { ContractUtils } from './contract-utils.js';
import { MockOptions, LiteralUnion } from '../types.js';
import { Provider } from '../providers/provider.js';
import { EnsUtils } from './ens-utils/index.js';
import { AbiEvent, AbiFunction, AbiError } from 'abitype';
import { Fragment } from 'ethers/lib/utils';
import { JsonFragment } from '@ethersproject/abi';
import { JsonRPCMethodName, JsonRPCMethod } from '../json-rpc-methods-types.js';
import 'events';

declare class LowLevelTestingUtils {
    private mockManager;
    constructor(mockManager: MockManager);
    /**
     * Emits an event
     * @param eventName Name of the event
     * @param payload Payload of the event
     * @example ```ts
     * lowLevelTestingUtils.emit("chainChanged", "0x1");
     * ```
     */
    emit(eventName: string, payload: any): this;
    /**
     * Mock a JSON-RPC request
     * @param method JSON-RPC method name
     * @param data Data to be resolved, or function to be called, or error to be thrown in case of throw
     * @param mockOptions.persistent If true, the mock will persist
     * @param mockOptions.shouldThrow If true, the mocked request will throw, the thrown error is the data field
     * @param mockOptions.timeout Timeout of the request, in milliseconds
     * @param mockOptions.condition Specific condition function for the mock, a conditional mock has priority over standard mocks. Signature is `(params: unknown[]) => boolean`
     * @param mockOptions.triggerCallback Callback that is triggered when the mock has been consumed. Signature is `(data?: unknown, params?: unknown[]) => void`
     * @example ```ts
     * // Mock one "eth_accounts" request
     * lowLevelTestingUtils.mockRequest("eth_accounts", ["0x..."]);
     * // Persistently mock "eth_chainId" request
     * lowLevelTestingUtils.mockRequest("eth_chainId", "0x1", { persistent: true });
     * // Mock with a dynamical value based on params
     * // "personal_sign" in this case, `bobsWallet` is externally defined here
     * mockManager.mockRequest("personal_sign", async (params: unknown[]) => {
     *   const statement = (params as string[])[0];
     *   return await bobsWallet.signMessage(statement);
     * });
     * ```
     */
    mockRequest<TMethod extends JsonRPCMethodName, TOptions extends MockOptions>(method: LiteralUnion<TMethod>, data: TOptions["shouldThrow"] extends true ? unknown : Extract<JsonRPCMethod, {
        method: TMethod;
    }>["response"] | ((params: Extract<JsonRPCMethod, {
        method: TMethod;
    }>["params"]) => Promise<Extract<JsonRPCMethod, {
        method: TMethod;
    }>["response"]> | Extract<JsonRPCMethod, {
        method: TMethod;
    }>["response"]), mockOptions?: TOptions): this;
}
type MockWalletOptions = {
    chainId?: string | number;
    blockNumber?: string | number;
    balance?: string | number;
};
type MockRequestAccountsOptions = {
    chainId?: string | number;
    blockNumber?: string | number;
    balance?: string | number;
    triggerCallback?: () => void;
};
declare class TestingUtils {
    private mockManager;
    private provider;
    lowLevel: LowLevelTestingUtils;
    ens: EnsUtils;
    private balanceConditionCache;
    constructor(provider: Provider);
    /**
     * Get the mock provider
     * @returns The mock provider
     */
    getProvider(): Provider;
    /**
     * Setup mock for a connected wallet: accounts, chain ID and block number are permanently mocked
     * @param accounts The array of accounts
     * @param options.chainId The chain ID, default to "0x1"
     * @param options.blockNumber The block number, default to "0x1"
     * @param options.balance The balance of the first account, default to 0
     * @example ```ts
     * testingUtils.mockConnectedWallet(["0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"]);
     * ```
     */
    mockConnectedWallet(accounts: string[], { chainId, blockNumber, balance, }?: MockWalletOptions): this;
    /**
     * Setup mock for a readonly provider: chain ID and block number are permanently mocked
     * @param options.chainId The chain ID, default to "0x1"
     * @param options.blockNumber The block number, default to "0x1"
     * @example ```ts
     * testingUtils.mockConnectedWallet(["0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"]);
     * ```
     */
    mockReadonlyProvider({ chainId, blockNumber }?: MockWalletOptions): this;
    /**
     * Setup mock for a not connected wallet: only the accounts are mocked to an empty array
     */
    mockNotConnectedWallet(): this;
    /**
     * Persistently mock the chain ID JSON-RPC request
     * @param chainId The chain ID
     * @example ```ts
     * // Mock chain ID to Ethereum main net
     * testingUtils.mockChainId("0x1");
     * ```
     */
    mockChainId(chainId: string | number): this;
    /**
     * Persistently mock the block number JSON-RPC request
     * @param blockNumber The block number as a number or a hex string
     * @example ```ts
     * // Using number - mock block number will be return as 0x0000000000000000000000000000000000000000000000000000000000000001
     * testingUtils.mockBlockNumber(1);
     * // Using hex string - mocked block number will be return as 0x0000000000000000000000000000000000000000000000000000000000000001
     * testingUtils.mockBlockNumber('0x1');
     * ```
     */
    mockBlockNumber(blockNumber: string | number): this;
    /**
     * Persistently mock the accounts JSON-RPC request
     * @param accounts The array of accounts
     * @example ```ts
     * testingUtils.mockAccounts(["0x..."]);
     * ```
     */
    mockAccounts(accounts: string[]): this;
    /**
     * Persistently mock the balance JSON-RPC request for a specific address
     * @param address Address for which the balance is queried
     * @param balance Balance of the address in Wei
     * @example ```ts
     * // With ethers
     * testingUtils.mockBalance("0x...", ethers.utils.parseUnits("1", "ether").toString())
     * // With web3.js
     * testingUtils.mockBalance("0x...", Web3.utils.toWei("1", "ether"))
     * ```
     */
    mockBalance(address: string, balance: string | number): this;
    /**
     * Mock a change to a new chain ID by persistently mocking the chain ID JSON-RPC request and emitting a "chainChanged" event
     * @param newChainId The new chain ID
     * @example ```ts
     * // Mock chain changed to Ropsten
     * testingUtils.mockChainChanged("0x3");
     * ```
     */
    mockChainChanged(newChainId: string): this;
    /**
     * Mock a change to new accounts by persistently mocking the accounts JSON-RPC request and emitting an "accountsChanged" event
     * @param newAccounts The new array of accounts
     * @example ```ts
     * testingUtils.mockAccountsChanged(["0x..."]);
     * ```
     */
    mockAccountsChanged(newAccounts: string[]): this;
    /**
     * Mock the subscription with a given subscription ID
     * @param subscriptionId The subscription ID as a hex string
     * @example ```ts
     * testingUtils.mockSubscribe("0x123");
     * ...
     * // Log emission using the subscription ID
     * contractTestingUtils.mockEmitLog("ValueUpdated", ["14"], "0x123")
     * ```
     */
    mockSubscribe(subscriptionId: string): this;
    /**
     * Mock the next eth_requestAccounts request and persistently mock the accounts once the latter request has been triggered
     * @param accounts Resolved accounts
     * @param options.chainId The mocked value of the chain ID once the request has been triggered, default to "0x1"
     * @param options.blockNumber The mocked value of the block number once the request has been triggered, default to "0x1"
     * @param options.balance The mocked value of the balance of the first account once the request has been triggered, default to 0
     * @param options.triggerCallback Optional additional callback to be triggered with the request. The existing callback will at least mock the eth_accounts
     * @example ```ts
     * // The next eth_requestAccounts request will return the array of address and be set on MainNet
     * testingUtils.mockRequestAccounts(["0x138071e4e810f34265bd833be9c5dd96f01bd8a5"], { chainId: "0x1" });
     * ```
     */
    mockRequestAccounts(accounts: string[], { chainId, blockNumber, balance, triggerCallback, }?: MockRequestAccountsOptions): this;
    /**
     * Generate contract specific testing utils
     * @param abi ABI of the contract
     * @param contractAddress Address of the contract
     * @returns The testing utils for this specific contract
     * @example ```ts
     * const ERC20_ABI = [...];
     * const erc20TestingUtils = testingUtils.generateContractUtils(ERC20_ABI);
     * ```
     */
    generateContractUtils<TAbi extends string | readonly (Fragment | JsonFragment | AbiEvent | AbiFunction | AbiError)[]>(abi: TAbi, contractAddress?: string): ContractUtils<TAbi>;
    /**
     * Clear all mocks
     */
    clearAllMocks(): this;
}

export { LowLevelTestingUtils, TestingUtils };
