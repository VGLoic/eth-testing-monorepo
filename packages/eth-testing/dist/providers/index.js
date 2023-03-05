"use strict";
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var __generator = this && this.__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/providers/index.ts
var providers_exports = {};
__export(providers_exports, {
    CoinbaseProvider: function() {
        return CoinbaseProvider;
    },
    MetaMaskProvider: function() {
        return MetaMaskProvider;
    },
    Provider: function() {
        return Provider;
    },
    WalletConnectProvider: function() {
        return WalletConnectProvider;
    }
});
module.exports = __toCommonJS(providers_exports);
// src/providers/provider.ts
var import_events = __toESM(require("events"));
var Provider = /*#__PURE__*/ function(_import_events_default) {
    _inherits(Provider, _import_events_default);
    var _super = _createSuper(Provider);
    function Provider(param) {
        var verbose = param.verbose, ethTestingProviderType = param.ethTestingProviderType;
        _classCallCheck(this, Provider);
        var _this;
        _this = _super.call(this);
        _this.requestMocks = {};
        _this.ethTestingProviderType = ethTestingProviderType;
        _this.verbose = verbose === false || verbose === void 0 ? {
            methods: []
        } : verbose === true ? {} : verbose;
        return _this;
    }
    _createClass(Provider, [
        {
            key: "request",
            value: function request(param) {
                var method = param.method, _param_params = param.params, params = _param_params === void 0 ? [] : _param_params;
                var _this = this;
                return _asyncToGenerator(function() {
                    var promise, _ref, data, callback, returnValue;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                promise = new Promise(function(resolve, reject) {
                                    var mock = _this.findMock(method, params);
                                    if (!mock) {
                                        if (!_this.verbose.dismissNotMocked && (_this.verbose.methods ? _this.verbose.methods.includes(method) : true)) {
                                            _this.logRequest(method, params, mock);
                                        }
                                        resolve({
                                            data: void 0
                                        });
                                        return;
                                    }
                                    if (!_this.verbose.dismissMocked && (_this.verbose.methods ? _this.verbose.methods.includes(method) : true)) {
                                        _this.logRequest(method, params, mock);
                                    }
                                    if (!mock.persistent) {
                                        _this.requestMocks[method] = _this.requestMocks[method].filter(function(m) {
                                            return mock !== m;
                                        });
                                    }
                                    setTimeout(function() {
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
                                return [
                                    4,
                                    promise
                                ];
                            case 1:
                                _ref = _state.sent(), data = _ref.data, callback = _ref.callback;
                                if (!(typeof data === "function")) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    data(params)
                                ];
                            case 2:
                                returnValue = _state.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                returnValue = data;
                                _state.label = 4;
                            case 4:
                                if (callback) {
                                    callback(returnValue, params);
                                }
                                return [
                                    2,
                                    returnValue
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "findMock",
            value: function findMock(method, params) {
                var mocks = this.requestMocks[method];
                if (!mocks) return null;
                var conditionalMock = mocks.find(function(mock) {
                    if (!mock.condition) return false;
                    return mock.condition(params);
                });
                if (conditionalMock) return conditionalMock;
                var standardMock = mocks.find(function(mock) {
                    return !Boolean(mock.condition);
                });
                return standardMock || null;
            }
        },
        {
            key: "logRequest",
            value: function logRequest(method, params, mock) {
                var mockDescription;
                if (!mock) {
                    mockDescription = "No mock has been found. 'undefined' will be resolved.";
                } else {
                    mockDescription = "\nMock found:\n- Data: ".concat(JSON.stringify(mock.data, null, 4), "\n- Persistent: ").concat(mock.persistent ? "yes" : "no", "\n- Conditional: ").concat(mock.condition ? "yes" : "no", "\n- Should throw: ").concat(mock.shouldThrow ? "yes" : "no", "\n");
                }
                console.log("\n#### [eth-testing] - start log ####\nRequest intercepted: { method: ".concat(method, ", params: ").concat(params ? JSON.stringify(params) : "[]", " }\n").concat(mockDescription, "\n#### [eth-testing] - end log ####\n"));
            }
        }
    ]);
    return Provider;
}(import_events.default);
// src/providers/metamask.ts
var MockInternalMetaMask = /*#__PURE__*/ function() {
    function MockInternalMetaMask() {
        _classCallCheck(this, MockInternalMetaMask);
    }
    _createClass(MockInternalMetaMask, [
        {
            key: "isUnlocked",
            value: function isUnlocked() {
                return true;
            }
        }
    ]);
    return MockInternalMetaMask;
}();
var MetaMaskProvider = /*#__PURE__*/ function(Provider) {
    _inherits(MetaMaskProvider, Provider);
    var _super = _createSuper(MetaMaskProvider);
    function MetaMaskProvider(param) {
        var verbose = param.verbose;
        _classCallCheck(this, MetaMaskProvider);
        var _this;
        _this = _super.call(this, {
            verbose: verbose,
            ethTestingProviderType: "MetaMask"
        });
        _this.isMetaMask = true;
        _this._metamask = new MockInternalMetaMask();
        return _this;
    }
    _createClass(MetaMaskProvider, [
        {
            key: "send",
            value: function send(methodOrPayload, params) {
                if (typeof methodOrPayload === "string") {
                    return this.request({
                        method: methodOrPayload,
                        params: params
                    });
                } else {
                    return this.request({
                        method: methodOrPayload.method,
                        params: methodOrPayload.params
                    });
                }
            }
        }
    ]);
    return MetaMaskProvider;
}(Provider);
// src/providers/wallet-connect.ts
var WalletConnectProvider = /*#__PURE__*/ function(Provider) {
    _inherits(WalletConnectProvider, Provider);
    var _super = _createSuper(WalletConnectProvider);
    function WalletConnectProvider(param) {
        var verbose = param.verbose;
        _classCallCheck(this, WalletConnectProvider);
        return _super.call(this, {
            verbose: verbose,
            ethTestingProviderType: "WalletConnect"
        });
    }
    _createClass(WalletConnectProvider, [
        {
            key: "disconnect",
            value: function disconnect() {
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "enable",
            value: function enable() {
                var _this = this;
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        return [
                            2,
                            _this.request({
                                method: "eth_accounts",
                                params: []
                            })
                        ];
                    });
                })();
            }
        }
    ]);
    return WalletConnectProvider;
}(Provider);
// src/providers/coinbase.ts
var CoinbaseProvider = /*#__PURE__*/ function(Provider) {
    _inherits(CoinbaseProvider, Provider);
    var _super = _createSuper(CoinbaseProvider);
    function CoinbaseProvider(param) {
        var verbose = param.verbose;
        _classCallCheck(this, CoinbaseProvider);
        var _this;
        _this = _super.call(this, {
            verbose: verbose,
            ethTestingProviderType: "Coinbase"
        });
        _this.isCoinbaseWallet = true;
        return _this;
    }
    _createClass(CoinbaseProvider, [
        {
            key: "send",
            value: function send(methodOrPayload, params) {
                if (typeof methodOrPayload === "string") {
                    return this.request({
                        method: methodOrPayload,
                        params: params
                    });
                } else {
                    return this.request({
                        method: methodOrPayload.method,
                        params: methodOrPayload.params
                    });
                }
            }
        }
    ]);
    return CoinbaseProvider;
}(Provider);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    CoinbaseProvider: CoinbaseProvider,
    MetaMaskProvider: MetaMaskProvider,
    Provider: Provider,
    WalletConnectProvider: WalletConnectProvider
});
