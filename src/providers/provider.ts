import { EventFilter } from "ethers";
import { MockRequest } from "../types";

type Subscriber = (args: unknown) => unknown;
type Topics = Map<string | EventFilter, Subscriber[]>;

type ProviderConstructorArgs = {
  verbose?: boolean;
};

export class Provider {
  public requestMocks: Record<string, MockRequest[]> = {};

  public topics: Topics = new Map();

  public verbose: boolean;

  constructor({ verbose }: ProviderConstructorArgs) {
    this.verbose = Boolean(verbose);
  }

  public on(eventName: string | EventFilter, callback: Subscriber) {
    if (this.topics.has(eventName)) {
      const subscribers = this.topics.get(eventName) as Subscriber[];
      subscribers.push(callback);
      this.topics.set(eventName, subscribers);
    } else {
      this.topics.set(eventName, [callback]);
    }
  }

  public once(eventName: string | EventFilter, callback: Subscriber) {
    const topics = this.topics;
    const updatedCallback = (args: unknown) => {
      const filteredTopics = (topics.get(eventName) || []).filter(
        (cb) => cb === callback
      );
      topics.set(eventName, filteredTopics);
      return callback(args);
    };
    if (this.topics.has(eventName)) {
      const subscribers = this.topics.get(eventName) as Subscriber[];
      subscribers.push(updatedCallback);
      this.topics.set(eventName, subscribers);
    } else {
      this.topics.set(eventName, [updatedCallback]);
    }
  }

  public removeListener(eventName: string | EventFilter, callback: Subscriber) {
    const subscribers = this.topics.get(eventName);
    if (!subscribers) return;
    this.topics.set(
      eventName,
      subscribers.filter((cb) => cb !== callback)
    );
  }

  public async request({
    method,
    params,
  }: {
    method: string;
    params: unknown[];
  }) {
    const promise = new Promise<{
      data: unknown;
      callback?: (data?: unknown, params?: unknown[]) => void;
    }>((resolve, reject) => {
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
    const conditionalMocks = mocks.filter((mock) => {
      if (!mock.condition) return false;
      return mock.condition(params);
    });
    if (conditionalMocks.length > 0) return conditionalMocks[0];
    const standardMocks = mocks.filter((mock) => !Boolean(mock.condition));
    if (standardMocks.length > 0) return standardMocks[0];
    return null;
  }

  private logRequest(
    method: string,
    params: unknown[],
    mock: MockRequest | null
  ) {
    let mockDescription: string;
    if (!mock) {
      mockDescription = "No mock has been found. 'undefined' will be resolved.";
    } else {
      mockDescription = `
Mock found:
- Data: ${JSON.stringify(mock.data, null, 4)}
- Persistent: ${mock.persistent ? "yes" : "no"}
- Conditional: ${mock.condition ? "yes" : "no"}
- Should throw: ${mock.shouldThrow ? "yes" : "no"}
`;
    }
    console.log(`
#### [eth-testing] - start log ####
Request intercepted: { method: ${method}, params: ${
      params ? JSON.stringify(params) : "[]"
    } }
${mockDescription}
#### [eth-testing] - end log ####
`);
  }
}
