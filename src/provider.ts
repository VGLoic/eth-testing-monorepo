import { MockRequest } from "./types";

type Subscriber = (args: unknown) => unknown;
type Topics = Record<string, Subscriber[]>;

type ProviderConstructorArgs = {
  verbose?: boolean;
}

export class Provider {
  public requestMocks: Record<string, MockRequest[]> = {};

  public topics: Topics = {};

  public verbose: boolean;

  constructor({ verbose }: ProviderConstructorArgs) {
    this.verbose = Boolean(verbose);
  }

  public on(eventName: string, callback: Subscriber) {
    if (this.topics[eventName]) {
      this.topics[eventName].push(callback);
    } else {
      this.topics[eventName] = [callback];
    }
  }

  public once(eventName: string, callback: Subscriber) {
    const topics = this.topics;
    const updatedCallback = (args: unknown) => {
      topics[eventName] = topics[eventName].filter(cb => cb === callback);
      return callback(args)
    }
    if (this.topics[eventName]) {
      this.topics[eventName].push(updatedCallback);
    } else {
      this.topics[eventName] = [updatedCallback];
    }
  }

  public removeListener(eventName: string, callback: Subscriber) {
    const subscribers = this.topics[eventName];
    if (!subscribers) return;
    this.topics[eventName] = subscribers.filter((cb) => cb !== callback);
  }

  public async request({
    method,
    params,
  }: {
    method: string;
    params: unknown[];
  }) {
    const promise = new Promise<{ data: unknown; callback?: (data?: unknown, params?: unknown[]) => void }>((resolve, reject) => {
      const mock = this.findMock(method, params);
      if (this.verbose) {
        this.logRequest(method, params, mock);
      }
      if (!mock) {
        resolve({ data: undefined });
        return;
      }
      if (!mock.persistent) {
        this.requestMocks[method] = this.requestMocks[method].filter(
          (m) => mock !== m
        );
      }
      setTimeout(() => {
        if (mock.shouldThrow) {
          reject(mock.data);
        } else {
          resolve({ data: mock.data, callback: mock.triggerCallback });
        }
      }, mock.timeout || 0);
    });
    const { data, callback } = await promise;
    if (callback) {
      callback(data, params);
    }
    return data;
  }

  private findMock(method: string, params: unknown[]) {
    const mocks = this.requestMocks[method];
    if (!mocks) return null;
    const conditionalMock = mocks.find((mock) => {
      if (!mock.condition) return false;
      return mock.condition(params);
    });
    if (conditionalMock) return conditionalMock;
    const standardMock = mocks.find((mock) => !Boolean(mock.condition));
    return standardMock || null;
  }

  private logRequest(method: string, params: unknown[], mock: MockRequest | null) {
    let mockDescription: string;
    if (!mock) {
      mockDescription = "No mock has been found. 'undefined' will be resolved.";
    } else {
      mockDescription = `
Mock found: \n
- Data: ${JSON.stringify(mock.data, null, 4)}
- Persistent: ${mock.persistent ? "yes" : "no"}
- Conditional: ${mock.condition ? "yes" : "no"}
- Should throw: ${mock.shouldThrow ? "yes" : "no"}
`
    }
    console.log(`
#### [eth-testing] - start log ####
Request intercepted: { method: ${method}, params: ${params} }
${mockDescription}
#### [eth-testing] - end log ####
`)
  }
}
