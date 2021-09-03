import { MockRequest } from "./types";

type Subscriber = (args: unknown) => unknown;
type Topics = Record<string, Subscriber[]>;

export class Provider {
  public requestMocks: Record<string, MockRequest[]> = {};

  public topics: Topics = {};

  public on(eventName: string, callback: Subscriber) {
    if (this.topics[eventName]) {
      this.topics[eventName].push(callback);
    } else {
      this.topics[eventName] = [callback];
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
    const promise = new Promise((resolve, reject) => {
      const mock = this.findMock(method, params);
      if (mock) {
        if (!mock.persistent) {
          this.requestMocks[method] = this.requestMocks[method].filter(
            (m) => mock !== m
          );
        }
        setTimeout(() => {
          if (mock.shouldThrow) {
            reject(mock.data);
          } else {
            resolve(mock.data);
          }
        }, mock.timeout || 0);
      } else {
        resolve(undefined);
      }
    });
    const result = await promise;
    return result;
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
}
