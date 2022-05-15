import { Provider } from "./providers";
import { MockOptions, MockRequest, MockCondition } from "./types";

export class MockManager {
  private provider: Provider;

  constructor(provider: Provider) {
    this.provider = provider;
  }

  /**
   * Emits an event
   * @param eventName Name of the event
   * @param payload Payload of the event
   * @example ```ts
   * mockManager.emit("chainChanged", "0x1");
   * ```
   */
  public emit(eventName: string, payload: any) {
    this.provider.emit(eventName, payload);
  }

  /**
   * Mock a JSON-RPC request
   * @param method JSON-RPC method name
   * @param data Data to be resolved, or error to be thrown in case of throw
   * @param mockOptions Options of the mock
   * @example ```ts
   * // Mock one "eth_accounts" request
   * mockManager.mockRequest("eth_accounts", ["0x..."]);
   * // Persistently mock "eth_chainId" request
   * mockManager.mockRequest("eth_chainId", "0x1", { persistent: true });
   * ```
   */
  public mockRequest(
    method: string,
    data: unknown,
    mockOptions: MockOptions = {}
  ) {
    const { condition, persistent } = mockOptions;
    const isConditionalMock = Boolean(condition);
    const isPersistent = Boolean(persistent);

    const mockRequest: MockRequest = {
      method,
      data,
      ...mockOptions,
    };

    if (isConditionalMock) {
      const currentConditionalPersistentMock =
        this.findConditionalPersistentMock(method, condition as MockCondition);
      if (currentConditionalPersistentMock) {
        if (!isPersistent) {
          console.warn(
            `There is already a persistent registered mock for ${method} with this condition, this additional mocking will not be considered.`
          );
          return this;
        }
        this.provider.requestMocks[method] = this.provider.requestMocks[
          method
        ].filter((mock) => mock !== currentConditionalPersistentMock);
      }
      return this.registerMock(method, mockRequest);
    }

    const currentUnconditionalPersistentMock =
      this.findUnconditionalPersistentMock(method);
    if (currentUnconditionalPersistentMock) {
      if (!isPersistent) {
        console.warn(
          `There is already a persistent registered mock for ${method}, this additional mocking will not be considered.`
        );
        return this;
      }
      this.provider.requestMocks[method] = this.provider.requestMocks[
        method
      ].filter((mock) => mock !== currentUnconditionalPersistentMock);
    }

    return this.registerMock(method, mockRequest);
  }

  private registerMock(method: string, mockRequest: MockRequest) {
    const mocks = this.provider.requestMocks[method];

    if (!mocks) {
      this.provider.requestMocks[method] = [mockRequest];
      return this;
    }

    mocks.push(mockRequest);

    return this;
  }

  public findUnconditionalPersistentMock(method: string) {
    const mocks = this.provider.requestMocks[method];
    if (!mocks) return false;
    return mocks.find((mock) => mock.persistent && !Boolean(mock.condition));
  }

  public findConditionalPersistentMock(
    method: string,
    condition: MockCondition
  ) {
    const mocks = this.provider.requestMocks[method];
    if (!mocks) return false;
    return mocks.find(
      (mock) => mock.persistent && mock.condition === condition
    );
  }

  /**
   * Clear all mocks for the provider
   */
  public clearAllMocks() {
    this.provider.requestMocks = {};
  }
}
