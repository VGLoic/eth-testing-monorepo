"use strict";
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/mock-manager.ts
var mock_manager_exports = {};
__export(mock_manager_exports, {
    MockManager: function() {
        return MockManager;
    }
});
module.exports = __toCommonJS(mock_manager_exports);
var defaultMockOptions = {};
var MockManager = /*#__PURE__*/ function() {
    function MockManager(provider) {
        _classCallCheck(this, MockManager);
        this.provider = provider;
    }
    _createClass(MockManager, [
        {
            /**
   * Emits an event
   * @param eventName Name of the event
   * @param payload Payload of the event
   * @example ```ts
   * mockManager.emit("chainChanged", "0x1");
   * ```
   */ key: "emit",
            value: function emit(eventName, payload) {
                this.provider.emit(eventName, payload);
            }
        },
        {
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
   */ key: "mockRequest",
            value: function mockRequest(method, data) {
                var mockOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultMockOptions;
                var condition = mockOptions.condition, persistent = mockOptions.persistent;
                var isConditionalMock = Boolean(condition);
                var isPersistent = Boolean(persistent);
                var mockRequest = _objectSpread({
                    method: method,
                    data: data
                }, mockOptions);
                if (isConditionalMock) {
                    var currentConditionalPersistentMock = this.findConditionalPersistentMock(method, condition);
                    if (currentConditionalPersistentMock) {
                        if (!isPersistent) {
                            console.warn("There is already a persistent registered mock for ".concat(method, " with this condition, this additional mocking will not be considered."));
                            return this;
                        }
                        this.provider.requestMocks[method] = this.provider.requestMocks[method].filter(function(mock) {
                            return mock !== currentConditionalPersistentMock;
                        });
                    }
                    return this.registerMock(method, mockRequest);
                }
                var currentUnconditionalPersistentMock = this.findUnconditionalPersistentMock(method);
                if (currentUnconditionalPersistentMock) {
                    if (!isPersistent) {
                        console.warn("There is already a persistent registered mock for ".concat(method, ", this additional mocking will not be considered."));
                        return this;
                    }
                    this.provider.requestMocks[method] = this.provider.requestMocks[method].filter(function(mock) {
                        return mock !== currentUnconditionalPersistentMock;
                    });
                }
                return this.registerMock(method, mockRequest);
            }
        },
        {
            key: "registerMock",
            value: function registerMock(method, mockRequest) {
                var mocks = this.provider.requestMocks[method];
                if (!mocks) {
                    this.provider.requestMocks[method] = [
                        mockRequest
                    ];
                    return this;
                }
                mocks.push(mockRequest);
                return this;
            }
        },
        {
            key: "findUnconditionalPersistentMock",
            value: function findUnconditionalPersistentMock(method) {
                var mocks = this.provider.requestMocks[method];
                if (!mocks) return false;
                return mocks.find(function(mock) {
                    return mock.persistent && !Boolean(mock.condition);
                });
            }
        },
        {
            key: "findConditionalPersistentMock",
            value: function findConditionalPersistentMock(method, condition) {
                var mocks = this.provider.requestMocks[method];
                if (!mocks) return false;
                return mocks.find(function(mock) {
                    return mock.persistent && mock.condition === condition;
                });
            }
        },
        {
            /**
   * Clear all mocks for the provider
   */ key: "clearAllMocks",
            value: function clearAllMocks() {
                this.provider.requestMocks = {};
            }
        }
    ]);
    return MockManager;
}();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    MockManager: MockManager
});
