import { JsonRPCMethodName, JsonRPCMethod } from './json-rpc-methods-types.js';
import { Provider } from './providers/provider.js';
import { MockOptions, LiteralUnion, MockRequest, MockCondition } from './types.js';
import 'events';

declare class MockManager {
    private provider;
    constructor(provider: Provider);
    /**
     * Emits an event
     * @param eventName Name of the event
     * @param payload Payload of the event
     * @example ```ts
     * mockManager.emit("chainChanged", "0x1");
     * ```
     */
    emit(eventName: string, payload: any): void;
    /**
     * Mock a JSON-RPC request
     * @param method JSON-RPC method name
     * @param data Data to be resolved, or function to be called, or error to be thrown in case of throw
     * @param mockOptions Options of the mock
     * @example ```ts
     * // Mock one "eth_accounts" request
     * mockManager.mockRequest("eth_accounts", ["0x..."]);
     * // Persistently mock "eth_chainId" request
     * mockManager.mockRequest("eth_chainId", "0x1", { persistent: true });
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
    private registerMock;
    findUnconditionalPersistentMock(method: LiteralUnion<JsonRPCMethodName>): false | MockRequest | undefined;
    findConditionalPersistentMock(method: LiteralUnion<JsonRPCMethodName>, condition: MockCondition): false | MockRequest | undefined;
    /**
     * Clear all mocks for the provider
     */
    clearAllMocks(): void;
}

export { MockManager };
