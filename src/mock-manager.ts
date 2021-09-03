import { Provider } from "./provider";
import { MockOptions, MockRequest } from "./types";

export class MockManager {
  private provider: Provider;

  constructor(provider: Provider) {
    this.provider = provider;
  }

  public emit(eventName: string, payload: any) {
    const subscribers = this.provider.topics[eventName];
    if (!subscribers) return;
    subscribers.forEach((subscriber) => {
      subscriber(payload);
    });
  }

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
      return this.registerMock(method, mockRequest);
    }

    const currentUnconditionalPersistentMock =
      this.findUnconditionalPersistentMock(method);
    if (currentUnconditionalPersistentMock) {
      if (!isPersistent) {
        console.warn(
          `There is only a persistent registered mock for ${method}, this additional mocking will not be considered.`
        );
        return this;
      }
      this.provider.requestMocks[method].filter(
        (mock) => mock !== currentUnconditionalPersistentMock
      );
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

  public clearAllMocks() {
    this.provider.requestMocks = {};
  }
}
