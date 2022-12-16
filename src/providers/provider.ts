// import { EventEmitter } from "node:events";
import EventEmitter from "events";
import { MockRequest } from "../types";

type VerboseConfiguration = {
  methods?: string[];
  dismissMocked?: boolean;
  dismissNotMocked?: boolean;
};
export type VerboseArgs = boolean | VerboseConfiguration;
type ProviderConstructorArgs = {
  verbose?: VerboseArgs;
};

export class Provider extends EventEmitter {
  public requestMocks: Record<string, MockRequest[]> = {};

  public verbose: VerboseConfiguration;

  constructor({ verbose }: ProviderConstructorArgs) {
    super();
    this.verbose =
      verbose === false || verbose === undefined
        ? {
            methods: [],
          }
        : verbose === true
        ? {}
        : verbose;
  }

  public async request({
    method,
    params = [] as unknown[],
  }: {
    method: string;
    params?: unknown[];
  }) {
    const promise = new Promise<{
      data: unknown;
      callback?: (data?: unknown, params?: unknown[]) => void;
    }>((resolve, reject) => {
      const mock = this.findMock(method, params);
      if (!mock) {
        if (
          !this.verbose.dismissNotMocked &&
          (this.verbose.methods ? this.verbose.methods.includes(method) : true)
        ) {
          this.logRequest(method, params, mock);
        }
        resolve({ data: undefined });
        return;
      }
      if (
        !this.verbose.dismissMocked &&
        (this.verbose.methods ? this.verbose.methods.includes(method) : true)
      ) {
        this.logRequest(method, params, mock);
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
          resolve({
            data: mock.data,
            callback: mock.triggerCallback,
          });
        }
      }, mock.timeout || 0);
    });
    const { data, callback } = await promise;
    let returnValue: unknown;
    if (typeof data === "function") {
      returnValue = await data(params);
    } else {
      returnValue = data;
    }
    if (callback) {
      callback(returnValue, params);
    }
    return returnValue;
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
