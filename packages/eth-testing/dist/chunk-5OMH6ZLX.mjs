// src/providers/provider.ts
import EventEmitter from "events";
var Provider = class extends EventEmitter {
  constructor({ verbose, ethTestingProviderType }) {
    super();
    this.requestMocks = {};
    this.ethTestingProviderType = ethTestingProviderType;
    this.verbose = verbose === false || verbose === void 0 ? {
      methods: []
    } : verbose === true ? {} : verbose;
  }
  async request({
    method,
    params = []
  }) {
    const promise = new Promise((resolve, reject) => {
      const mock = this.findMock(method, params);
      if (!mock) {
        if (!this.verbose.dismissNotMocked && (this.verbose.methods ? this.verbose.methods.includes(method) : true)) {
          this.logRequest(method, params, mock);
        }
        resolve({ data: void 0 });
        return;
      }
      if (!this.verbose.dismissMocked && (this.verbose.methods ? this.verbose.methods.includes(method) : true)) {
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
            callback: mock.triggerCallback
          });
        }
      }, mock.timeout || 0);
    });
    const { data, callback } = await promise;
    let returnValue;
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
  findMock(method, params) {
    const mocks = this.requestMocks[method];
    if (!mocks)
      return null;
    const conditionalMock = mocks.find((mock) => {
      if (!mock.condition)
        return false;
      return mock.condition(params);
    });
    if (conditionalMock)
      return conditionalMock;
    const standardMock = mocks.find((mock) => !Boolean(mock.condition));
    return standardMock || null;
  }
  logRequest(method, params, mock) {
    let mockDescription;
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
Request intercepted: { method: ${method}, params: ${params ? JSON.stringify(params) : "[]"} }
${mockDescription}
#### [eth-testing] - end log ####
`);
  }
};

export {
  Provider
};
