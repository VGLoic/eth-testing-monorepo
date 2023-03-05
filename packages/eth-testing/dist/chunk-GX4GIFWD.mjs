// src/mock-manager.ts
var defaultMockOptions = {};
var MockManager = class {
  constructor(provider) {
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
  emit(eventName, payload) {
    this.provider.emit(eventName, payload);
  }
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
  mockRequest(method, data, mockOptions = defaultMockOptions) {
    const { condition, persistent } = mockOptions;
    const isConditionalMock = Boolean(condition);
    const isPersistent = Boolean(persistent);
    const mockRequest = {
      method,
      data,
      ...mockOptions
    };
    if (isConditionalMock) {
      const currentConditionalPersistentMock = this.findConditionalPersistentMock(method, condition);
      if (currentConditionalPersistentMock) {
        if (!isPersistent) {
          console.warn(
            `There is already a persistent registered mock for ${method} with this condition, this additional mocking will not be considered.`
          );
          return this;
        }
        this.provider.requestMocks[method] = this.provider.requestMocks[method].filter((mock) => mock !== currentConditionalPersistentMock);
      }
      return this.registerMock(method, mockRequest);
    }
    const currentUnconditionalPersistentMock = this.findUnconditionalPersistentMock(method);
    if (currentUnconditionalPersistentMock) {
      if (!isPersistent) {
        console.warn(
          `There is already a persistent registered mock for ${method}, this additional mocking will not be considered.`
        );
        return this;
      }
      this.provider.requestMocks[method] = this.provider.requestMocks[method].filter((mock) => mock !== currentUnconditionalPersistentMock);
    }
    return this.registerMock(method, mockRequest);
  }
  registerMock(method, mockRequest) {
    const mocks = this.provider.requestMocks[method];
    if (!mocks) {
      this.provider.requestMocks[method] = [mockRequest];
      return this;
    }
    mocks.push(mockRequest);
    return this;
  }
  findUnconditionalPersistentMock(method) {
    const mocks = this.provider.requestMocks[method];
    if (!mocks)
      return false;
    return mocks.find((mock) => mock.persistent && !Boolean(mock.condition));
  }
  findConditionalPersistentMock(method, condition) {
    const mocks = this.provider.requestMocks[method];
    if (!mocks)
      return false;
    return mocks.find(
      (mock) => mock.persistent && mock.condition === condition
    );
  }
  /**
   * Clear all mocks for the provider
   */
  clearAllMocks() {
    this.provider.requestMocks = {};
  }
};

export {
  MockManager
};
