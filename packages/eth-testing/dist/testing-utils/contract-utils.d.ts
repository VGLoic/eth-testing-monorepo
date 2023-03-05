import { JsonFragment, Fragment } from '@ethersproject/abi';
import { MockManager } from '../mock-manager.js';
import { MockOptions } from '../types.js';
import { AbiEvent, AbiFunction, AbiError, ExtractAbiFunctionNames, ExtractAbiEventNames } from 'abitype';
import { JsonRPCMethod, Log } from '../json-rpc-methods-types.js';
import { ProviderType } from '../providers/provider.js';
import 'events';

type CallOptions = {
    contractAddress?: string;
    callValues?: readonly any[];
};
type TxOptions = {
    from?: string;
    to?: string;
    contractAddress?: string;
    txValues?: readonly any[];
};
type AbiType = ReadonlyArray<AbiEvent | AbiFunction | AbiError>;
declare class ContractUtils<TAbi extends string | readonly ((JsonFragment | Fragment) | (AbiEvent | AbiFunction | AbiError))[]> {
    private mockManager;
    private contractInterface;
    address?: string;
    private conditionCache;
    private ethTestingProviderType;
    constructor(mockManager: MockManager, ethTestingProviderType: ProviderType, abi: TAbi, address?: string);
    /**
     * Mock a call of the contract
     * @param functionName Name of the function
     * @param values Array of values to be returned or function resolving/returning the array of values to be returned - array is used as ordering of the returned data
     * @param callOptions.callValues Optional array of values passed to the call - useful when dealing with multiple similar calls with different arguments
     * @param callOptions.contractAddress Optional address of the contract, fallbacks to the contract address of the utils if specified
     * @param mockOptions.persistent If true, the mock will persist
     * @param mockOptions.shouldThrow If true, the mocked request will throw, the thrown error is the data field
     * @param mockOptions.timeout Timeout of the request, in milliseconds
     * @param mockOptions.condition Specific condition function for the mock, a conditional mock has priority over standard mocks. Signature is `(params: unknown[]) => boolean`
     * @param mockOptions.triggerCallback Callback that is triggered when the mock has been consumed. Signature is `(data?: unknown, params?: unknown[]) => void`
     * @example ```ts
     * // Mock next call to `value` function with return value `12`
     * contractUtils.mockCall("value", ["12"]);
     * // Mock next call to `value` function with return value `12`
     * contractUtils.mockCall("value", async () => {doSomething(); return ["12"];});
     * ```
     */
    mockCall(functionName: TAbi extends AbiType ? ExtractAbiFunctionNames<TAbi, "view" | "pure"> : string, values: readonly unknown[] | ((params: Extract<JsonRPCMethod, {
        method: "eth_call";
    }>) => Promise<readonly unknown[]> | readonly unknown[]) | undefined, callOptions?: CallOptions, mockOptions?: MockOptions): this;
    /**
     * Mock a transaction of the contract
     * @param functionName Name of the function
     * @param txOptions.from Optional address of the sender, fallbacks to the current mocked account
     * @param txOptions.to Optional address of the recipient, fallbacks to the contract address of the utils if specified
     * @param txOptions.contractAddress Optional contract address address of the receipt, fallbacks to the contract address of the utils if specified
     * @param txOptions.txValues Optional array of values passed to the transaction - useful when dealing with multiple similar calls with different arguments
     * @param mockOptions.persistent If true, the mock will persist
     * @param mockOptions.shouldThrow If true, the mocked request will throw, the thrown error is the data field
     * @param mockOptions.timeout Timeout of the request, in milliseconds
     * @param mockOptions.condition Specific condition function for the mock, a conditional mock has priority over standard mocks. Signature is `(params: unknown[]) => boolean`
     * @param mockOptions.triggerCallback Callback that is triggered when the mock has been consumed. Signature is `(data?: unknown, params?: unknown[]) => void`
     * @example ```ts
     * // Mock next transaction using `setValue` method
     * contractUtils.mockTransaction("setValue");
     * ```
     */
    mockTransaction(functionName: TAbi extends AbiType ? ExtractAbiFunctionNames<TAbi, "nonpayable" | "payable"> : string, txOptions?: TxOptions, mockOptions?: MockOptions): this;
    /**
     * Mock the next past logs request with an array of a single event type
     * @param eventName Name of the event
     * @param allValues Array of array of values of the events
     * @example ```ts
     * // Mock for two events `event ValueUpdated(uint value)` with values `0` and `12`
     * contractTestingUtils.mockGetLogs("ValueUpdated", [["0"], ["12"]]);
     * ```
     */
    mockGetLogs(eventName: TAbi extends AbiType ? ExtractAbiEventNames<TAbi> : string, allValues: unknown[][]): this;
    /**
     * Mock an emission of a log, mocked block number is automatically increased
     * @param eventName Name of the event
     * @param values array of values of the event
     * @param subscriptionId Needed if using web3.js
     * @param logOverrides Optional overrides for the log
     * @example ```ts
     * // Mock emission of a log for `event ValueUpdated(uint value)` with value `12`
     * ...
     * // With ethers
     * contractTestingUtils.mockEmitLog("ValueUpdated", ["12"]);
     * // With web3.js
     * testingUtils.mockSubscribe("0x123");
     * ...
     * contractTestingUtils.mockEmitLog("ValueUpdated", ["12"], "0x123");
     * ```
     */
    mockEmitLog(eventName: TAbi extends AbiType ? ExtractAbiEventNames<TAbi> : string, values: unknown[], subscriptionId?: string, logOverrides?: Partial<Log>): this;
    /**
     * Generate a log from an event name and the values of the event
     * @param eventName Name of the event
     * @param values Array of values of the event
     * @param logOverrides Optional overrides for the log
     * @example ```ts
     * // Generate a log for `event ValueUpdated(uint value)` with value `12`
     * const log = contractTestingUtils.generateMockLog("ValueUpdated", ["12"]);
     * ```
     * @returns The log for the event
     */
    generateMockLog(eventName: TAbi extends AbiType ? ExtractAbiEventNames<TAbi> : string, values: unknown[], logOverrides?: Partial<Log>): Log;
}

export { ContractUtils };
