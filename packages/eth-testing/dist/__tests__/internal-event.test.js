"use strict";
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _assertThisInitialized(self1) {
    if (self1 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self1;
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
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _possibleConstructorReturn(self1, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self1);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
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
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
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
var __commonJS = function(cb, mod) {
    return function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
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
// ../../node_modules/@ethersproject/bignumber/node_modules/bn.js/lib/bn.js
var require_bn = __commonJS({
    "../../node_modules/@ethersproject/bignumber/node_modules/bn.js/lib/bn.js": function(exports, module2) {
        (function(module3, exports2) {
            "use strict";
            var assert = function assert(val, msg) {
                if (!val) throw new Error(msg || "Assertion failed");
            };
            var inherits = function inherits(ctor, superCtor) {
                ctor.super_ = superCtor;
                var TempCtor = function TempCtor() {};
                TempCtor.prototype = superCtor.prototype;
                ctor.prototype = new TempCtor();
                ctor.prototype.constructor = ctor;
            };
            var parseHex4Bits = function parseHex4Bits(string, index) {
                var c = string.charCodeAt(index);
                if (c >= 48 && c <= 57) {
                    return c - 48;
                } else if (c >= 65 && c <= 70) {
                    return c - 55;
                } else if (c >= 97 && c <= 102) {
                    return c - 87;
                } else {
                    assert(false, "Invalid character in " + string);
                }
            };
            var parseHexByte = function parseHexByte(string, lowerBound, index) {
                var r = parseHex4Bits(string, index);
                if (index - 1 >= lowerBound) {
                    r |= parseHex4Bits(string, index - 1) << 4;
                }
                return r;
            };
            var parseBase = function parseBase(str, start, end, mul) {
                var r = 0;
                var b = 0;
                var len = Math.min(str.length, end);
                for(var i = start; i < len; i++){
                    var c = str.charCodeAt(i) - 48;
                    r *= mul;
                    if (c >= 49) {
                        b = c - 49 + 10;
                    } else if (c >= 17) {
                        b = c - 17 + 10;
                    } else {
                        b = c;
                    }
                    assert(c >= 0 && b < mul, "Invalid character");
                    r += b;
                }
                return r;
            };
            var move = function move(dest, src) {
                dest.words = src.words;
                dest.length = src.length;
                dest.negative = src.negative;
                dest.red = src.red;
            };
            var inspect = function inspect() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
            };
            var toBitArray = function toBitArray(num) {
                var w = new Array(num.bitLength());
                for(var bit = 0; bit < w.length; bit++){
                    var off = bit / 26 | 0;
                    var wbit = bit % 26;
                    w[bit] = num.words[off] >>> wbit & 1;
                }
                return w;
            };
            var smallMulTo = function smallMulTo(self2, num, out) {
                out.negative = num.negative ^ self2.negative;
                var len = self2.length + num.length | 0;
                out.length = len;
                len = len - 1 | 0;
                var a = self2.words[0] | 0;
                var b = num.words[0] | 0;
                var r = a * b;
                var lo = r & 67108863;
                var carry = r / 67108864 | 0;
                out.words[0] = lo;
                for(var k = 1; k < len; k++){
                    var ncarry = carry >>> 26;
                    var rword = carry & 67108863;
                    var maxJ = Math.min(k, num.length - 1);
                    for(var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++){
                        var i = k - j | 0;
                        a = self2.words[i] | 0;
                        b = num.words[j] | 0;
                        r = a * b + rword;
                        ncarry += r / 67108864 | 0;
                        rword = r & 67108863;
                    }
                    out.words[k] = rword | 0;
                    carry = ncarry | 0;
                }
                if (carry !== 0) {
                    out.words[k] = carry | 0;
                } else {
                    out.length--;
                }
                return out._strip();
            };
            var bigMulTo = function bigMulTo(self2, num, out) {
                out.negative = num.negative ^ self2.negative;
                out.length = self2.length + num.length;
                var carry = 0;
                var hncarry = 0;
                for(var k = 0; k < out.length - 1; k++){
                    var ncarry = hncarry;
                    hncarry = 0;
                    var rword = carry & 67108863;
                    var maxJ = Math.min(k, num.length - 1);
                    for(var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++){
                        var i = k - j;
                        var a = self2.words[i] | 0;
                        var b = num.words[j] | 0;
                        var r = a * b;
                        var lo = r & 67108863;
                        ncarry = ncarry + (r / 67108864 | 0) | 0;
                        lo = lo + rword | 0;
                        rword = lo & 67108863;
                        ncarry = ncarry + (lo >>> 26) | 0;
                        hncarry += ncarry >>> 26;
                        ncarry &= 67108863;
                    }
                    out.words[k] = rword;
                    carry = ncarry;
                    ncarry = hncarry;
                }
                if (carry !== 0) {
                    out.words[k] = carry;
                } else {
                    out.length--;
                }
                return out._strip();
            };
            var jumboMulTo = function jumboMulTo(self2, num, out) {
                return bigMulTo(self2, num, out);
            };
            var FFTM = function FFTM(x, y) {
                this.x = x;
                this.y = y;
            };
            var MPrime = function MPrime(name, p) {
                this.name = name;
                this.p = new BN2(p, 16);
                this.n = this.p.bitLength();
                this.k = new BN2(1).iushln(this.n).isub(this.p);
                this.tmp = this._tmp();
            };
            var K256 = function K256() {
                MPrime.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
            };
            var P224 = function P224() {
                MPrime.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
            };
            var P192 = function P192() {
                MPrime.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
            };
            var P25519 = function P25519() {
                MPrime.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
            };
            var Red = function Red(m) {
                if (typeof m === "string") {
                    var prime = BN2._prime(m);
                    this.m = prime.p;
                    this.prime = prime;
                } else {
                    assert(m.gtn(1), "modulus must be greater than 1");
                    this.m = m;
                    this.prime = null;
                }
            };
            var Mont = function Mont(m) {
                Red.call(this, m);
                this.shift = this.m.bitLength();
                if (this.shift % 26 !== 0) {
                    this.shift += 26 - this.shift % 26;
                }
                this.r = new BN2(1).iushln(this.shift);
                this.r2 = this.imod(this.r.sqr());
                this.rinv = this.r._invmp(this.m);
                this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
                this.minv = this.minv.umod(this.r);
                this.minv = this.r.sub(this.minv);
            };
            function BN2(number, base, endian) {
                if (BN2.isBN(number)) {
                    return number;
                }
                this.negative = 0;
                this.words = null;
                this.length = 0;
                this.red = null;
                if (number !== null) {
                    if (base === "le" || base === "be") {
                        endian = base;
                        base = 10;
                    }
                    this._init(number || 0, base || 10, endian || "be");
                }
            }
            if (typeof module3 === "object") {
                module3.exports = BN2;
            } else {
                exports2.BN = BN2;
            }
            BN2.BN = BN2;
            BN2.wordSize = 26;
            var Buffer2;
            try {
                if (typeof window !== "undefined" && typeof window.Buffer !== "undefined") {
                    Buffer2 = window.Buffer;
                } else {
                    Buffer2 = require("buffer").Buffer;
                }
            } catch (e) {}
            BN2.isBN = function isBN(num) {
                if (_instanceof(num, BN2)) {
                    return true;
                }
                return num !== null && typeof num === "object" && num.constructor.wordSize === BN2.wordSize && Array.isArray(num.words);
            };
            BN2.max = function max(left, right) {
                if (left.cmp(right) > 0) return left;
                return right;
            };
            BN2.min = function min(left, right) {
                if (left.cmp(right) < 0) return left;
                return right;
            };
            BN2.prototype._init = function init(number, base, endian) {
                if (typeof number === "number") {
                    return this._initNumber(number, base, endian);
                }
                if (typeof number === "object") {
                    return this._initArray(number, base, endian);
                }
                if (base === "hex") {
                    base = 16;
                }
                assert(base === (base | 0) && base >= 2 && base <= 36);
                number = number.toString().replace(/\s+/g, "");
                var start = 0;
                if (number[0] === "-") {
                    start++;
                    this.negative = 1;
                }
                if (start < number.length) {
                    if (base === 16) {
                        this._parseHex(number, start, endian);
                    } else {
                        this._parseBase(number, base, start);
                        if (endian === "le") {
                            this._initArray(this.toArray(), base, endian);
                        }
                    }
                }
            };
            BN2.prototype._initNumber = function _initNumber(number, base, endian) {
                if (number < 0) {
                    this.negative = 1;
                    number = -number;
                }
                if (number < 67108864) {
                    this.words = [
                        number & 67108863
                    ];
                    this.length = 1;
                } else if (number < 4503599627370496) {
                    this.words = [
                        number & 67108863,
                        number / 67108864 & 67108863
                    ];
                    this.length = 2;
                } else {
                    assert(number < 9007199254740992);
                    this.words = [
                        number & 67108863,
                        number / 67108864 & 67108863,
                        1
                    ];
                    this.length = 3;
                }
                if (endian !== "le") return;
                this._initArray(this.toArray(), base, endian);
            };
            BN2.prototype._initArray = function _initArray(number, base, endian) {
                assert(typeof number.length === "number");
                if (number.length <= 0) {
                    this.words = [
                        0
                    ];
                    this.length = 1;
                    return this;
                }
                this.length = Math.ceil(number.length / 3);
                this.words = new Array(this.length);
                for(var i = 0; i < this.length; i++){
                    this.words[i] = 0;
                }
                var j, w;
                var off = 0;
                if (endian === "be") {
                    for(i = number.length - 1, j = 0; i >= 0; i -= 3){
                        w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
                        this.words[j] |= w << off & 67108863;
                        this.words[j + 1] = w >>> 26 - off & 67108863;
                        off += 24;
                        if (off >= 26) {
                            off -= 26;
                            j++;
                        }
                    }
                } else if (endian === "le") {
                    for(i = 0, j = 0; i < number.length; i += 3){
                        w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
                        this.words[j] |= w << off & 67108863;
                        this.words[j + 1] = w >>> 26 - off & 67108863;
                        off += 24;
                        if (off >= 26) {
                            off -= 26;
                            j++;
                        }
                    }
                }
                return this._strip();
            };
            BN2.prototype._parseHex = function _parseHex(number, start, endian) {
                this.length = Math.ceil((number.length - start) / 6);
                this.words = new Array(this.length);
                for(var i = 0; i < this.length; i++){
                    this.words[i] = 0;
                }
                var off = 0;
                var j = 0;
                var w;
                if (endian === "be") {
                    for(i = number.length - 1; i >= start; i -= 2){
                        w = parseHexByte(number, start, i) << off;
                        this.words[j] |= w & 67108863;
                        if (off >= 18) {
                            off -= 18;
                            j += 1;
                            this.words[j] |= w >>> 26;
                        } else {
                            off += 8;
                        }
                    }
                } else {
                    var parseLength = number.length - start;
                    for(i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2){
                        w = parseHexByte(number, start, i) << off;
                        this.words[j] |= w & 67108863;
                        if (off >= 18) {
                            off -= 18;
                            j += 1;
                            this.words[j] |= w >>> 26;
                        } else {
                            off += 8;
                        }
                    }
                }
                this._strip();
            };
            BN2.prototype._parseBase = function _parseBase(number, base, start) {
                this.words = [
                    0
                ];
                this.length = 1;
                for(var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base){
                    limbLen++;
                }
                limbLen--;
                limbPow = limbPow / base | 0;
                var total = number.length - start;
                var mod = total % limbLen;
                var end = Math.min(total, total - mod) + start;
                var word = 0;
                for(var i = start; i < end; i += limbLen){
                    word = parseBase(number, i, i + limbLen, base);
                    this.imuln(limbPow);
                    if (this.words[0] + word < 67108864) {
                        this.words[0] += word;
                    } else {
                        this._iaddn(word);
                    }
                }
                if (mod !== 0) {
                    var pow = 1;
                    word = parseBase(number, i, number.length, base);
                    for(i = 0; i < mod; i++){
                        pow *= base;
                    }
                    this.imuln(pow);
                    if (this.words[0] + word < 67108864) {
                        this.words[0] += word;
                    } else {
                        this._iaddn(word);
                    }
                }
                this._strip();
            };
            BN2.prototype.copy = function copy(dest) {
                dest.words = new Array(this.length);
                for(var i = 0; i < this.length; i++){
                    dest.words[i] = this.words[i];
                }
                dest.length = this.length;
                dest.negative = this.negative;
                dest.red = this.red;
            };
            BN2.prototype._move = function _move(dest) {
                move(dest, this);
            };
            BN2.prototype.clone = function clone() {
                var r = new BN2(null);
                this.copy(r);
                return r;
            };
            BN2.prototype._expand = function _expand(size) {
                while(this.length < size){
                    this.words[this.length++] = 0;
                }
                return this;
            };
            BN2.prototype._strip = function strip() {
                while(this.length > 1 && this.words[this.length - 1] === 0){
                    this.length--;
                }
                return this._normSign();
            };
            BN2.prototype._normSign = function _normSign() {
                if (this.length === 1 && this.words[0] === 0) {
                    this.negative = 0;
                }
                return this;
            };
            if (typeof Symbol !== "undefined" && typeof Symbol.for === "function") {
                try {
                    BN2.prototype[Symbol.for("nodejs.util.inspect.custom")] = inspect;
                } catch (e) {
                    BN2.prototype.inspect = inspect;
                }
            } else {
                BN2.prototype.inspect = inspect;
            }
            var zeros = [
                "",
                "0",
                "00",
                "000",
                "0000",
                "00000",
                "000000",
                "0000000",
                "00000000",
                "000000000",
                "0000000000",
                "00000000000",
                "000000000000",
                "0000000000000",
                "00000000000000",
                "000000000000000",
                "0000000000000000",
                "00000000000000000",
                "000000000000000000",
                "0000000000000000000",
                "00000000000000000000",
                "000000000000000000000",
                "0000000000000000000000",
                "00000000000000000000000",
                "000000000000000000000000",
                "0000000000000000000000000"
            ];
            var groupSizes = [
                0,
                0,
                25,
                16,
                12,
                11,
                10,
                9,
                8,
                8,
                7,
                7,
                7,
                7,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5
            ];
            var groupBases = [
                0,
                0,
                33554432,
                43046721,
                16777216,
                48828125,
                60466176,
                40353607,
                16777216,
                43046721,
                1e7,
                19487171,
                35831808,
                62748517,
                7529536,
                11390625,
                16777216,
                24137569,
                34012224,
                47045881,
                64e6,
                4084101,
                5153632,
                6436343,
                7962624,
                9765625,
                11881376,
                14348907,
                17210368,
                20511149,
                243e5,
                28629151,
                33554432,
                39135393,
                45435424,
                52521875,
                60466176
            ];
            BN2.prototype.toString = function toString(base, padding) {
                base = base || 10;
                padding = padding | 0 || 1;
                var out;
                if (base === 16 || base === "hex") {
                    out = "";
                    var off = 0;
                    var carry = 0;
                    for(var i = 0; i < this.length; i++){
                        var w = this.words[i];
                        var word = ((w << off | carry) & 16777215).toString(16);
                        carry = w >>> 24 - off & 16777215;
                        off += 2;
                        if (off >= 26) {
                            off -= 26;
                            i--;
                        }
                        if (carry !== 0 || i !== this.length - 1) {
                            out = zeros[6 - word.length] + word + out;
                        } else {
                            out = word + out;
                        }
                    }
                    if (carry !== 0) {
                        out = carry.toString(16) + out;
                    }
                    while(out.length % padding !== 0){
                        out = "0" + out;
                    }
                    if (this.negative !== 0) {
                        out = "-" + out;
                    }
                    return out;
                }
                if (base === (base | 0) && base >= 2 && base <= 36) {
                    var groupSize = groupSizes[base];
                    var groupBase = groupBases[base];
                    out = "";
                    var c = this.clone();
                    c.negative = 0;
                    while(!c.isZero()){
                        var r = c.modrn(groupBase).toString(base);
                        c = c.idivn(groupBase);
                        if (!c.isZero()) {
                            out = zeros[groupSize - r.length] + r + out;
                        } else {
                            out = r + out;
                        }
                    }
                    if (this.isZero()) {
                        out = "0" + out;
                    }
                    while(out.length % padding !== 0){
                        out = "0" + out;
                    }
                    if (this.negative !== 0) {
                        out = "-" + out;
                    }
                    return out;
                }
                assert(false, "Base should be between 2 and 36");
            };
            BN2.prototype.toNumber = function toNumber() {
                var ret = this.words[0];
                if (this.length === 2) {
                    ret += this.words[1] * 67108864;
                } else if (this.length === 3 && this.words[2] === 1) {
                    ret += 4503599627370496 + this.words[1] * 67108864;
                } else if (this.length > 2) {
                    assert(false, "Number can only safely store up to 53 bits");
                }
                return this.negative !== 0 ? -ret : ret;
            };
            BN2.prototype.toJSON = function toJSON() {
                return this.toString(16, 2);
            };
            if (Buffer2) {
                BN2.prototype.toBuffer = function toBuffer(endian, length) {
                    return this.toArrayLike(Buffer2, endian, length);
                };
            }
            BN2.prototype.toArray = function toArray(endian, length) {
                return this.toArrayLike(Array, endian, length);
            };
            var allocate = function allocate2(ArrayType, size) {
                if (ArrayType.allocUnsafe) {
                    return ArrayType.allocUnsafe(size);
                }
                return new ArrayType(size);
            };
            BN2.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
                this._strip();
                var byteLength = this.byteLength();
                var reqLength = length || Math.max(1, byteLength);
                assert(byteLength <= reqLength, "byte array longer than desired length");
                assert(reqLength > 0, "Requested array length <= 0");
                var res = allocate(ArrayType, reqLength);
                var postfix = endian === "le" ? "LE" : "BE";
                this["_toArrayLike" + postfix](res, byteLength);
                return res;
            };
            BN2.prototype._toArrayLikeLE = function _toArrayLikeLE(res, byteLength) {
                var position = 0;
                var carry = 0;
                for(var i = 0, shift = 0; i < this.length; i++){
                    var word = this.words[i] << shift | carry;
                    res[position++] = word & 255;
                    if (position < res.length) {
                        res[position++] = word >> 8 & 255;
                    }
                    if (position < res.length) {
                        res[position++] = word >> 16 & 255;
                    }
                    if (shift === 6) {
                        if (position < res.length) {
                            res[position++] = word >> 24 & 255;
                        }
                        carry = 0;
                        shift = 0;
                    } else {
                        carry = word >>> 24;
                        shift += 2;
                    }
                }
                if (position < res.length) {
                    res[position++] = carry;
                    while(position < res.length){
                        res[position++] = 0;
                    }
                }
            };
            BN2.prototype._toArrayLikeBE = function _toArrayLikeBE(res, byteLength) {
                var position = res.length - 1;
                var carry = 0;
                for(var i = 0, shift = 0; i < this.length; i++){
                    var word = this.words[i] << shift | carry;
                    res[position--] = word & 255;
                    if (position >= 0) {
                        res[position--] = word >> 8 & 255;
                    }
                    if (position >= 0) {
                        res[position--] = word >> 16 & 255;
                    }
                    if (shift === 6) {
                        if (position >= 0) {
                            res[position--] = word >> 24 & 255;
                        }
                        carry = 0;
                        shift = 0;
                    } else {
                        carry = word >>> 24;
                        shift += 2;
                    }
                }
                if (position >= 0) {
                    res[position--] = carry;
                    while(position >= 0){
                        res[position--] = 0;
                    }
                }
            };
            if (Math.clz32) {
                BN2.prototype._countBits = function _countBits(w) {
                    return 32 - Math.clz32(w);
                };
            } else {
                BN2.prototype._countBits = function _countBits(w) {
                    var t = w;
                    var r = 0;
                    if (t >= 4096) {
                        r += 13;
                        t >>>= 13;
                    }
                    if (t >= 64) {
                        r += 7;
                        t >>>= 7;
                    }
                    if (t >= 8) {
                        r += 4;
                        t >>>= 4;
                    }
                    if (t >= 2) {
                        r += 2;
                        t >>>= 2;
                    }
                    return r + t;
                };
            }
            BN2.prototype._zeroBits = function _zeroBits(w) {
                if (w === 0) return 26;
                var t = w;
                var r = 0;
                if ((t & 8191) === 0) {
                    r += 13;
                    t >>>= 13;
                }
                if ((t & 127) === 0) {
                    r += 7;
                    t >>>= 7;
                }
                if ((t & 15) === 0) {
                    r += 4;
                    t >>>= 4;
                }
                if ((t & 3) === 0) {
                    r += 2;
                    t >>>= 2;
                }
                if ((t & 1) === 0) {
                    r++;
                }
                return r;
            };
            BN2.prototype.bitLength = function bitLength() {
                var w = this.words[this.length - 1];
                var hi = this._countBits(w);
                return (this.length - 1) * 26 + hi;
            };
            BN2.prototype.zeroBits = function zeroBits() {
                if (this.isZero()) return 0;
                var r = 0;
                for(var i = 0; i < this.length; i++){
                    var b = this._zeroBits(this.words[i]);
                    r += b;
                    if (b !== 26) break;
                }
                return r;
            };
            BN2.prototype.byteLength = function byteLength() {
                return Math.ceil(this.bitLength() / 8);
            };
            BN2.prototype.toTwos = function toTwos(width) {
                if (this.negative !== 0) {
                    return this.abs().inotn(width).iaddn(1);
                }
                return this.clone();
            };
            BN2.prototype.fromTwos = function fromTwos(width) {
                if (this.testn(width - 1)) {
                    return this.notn(width).iaddn(1).ineg();
                }
                return this.clone();
            };
            BN2.prototype.isNeg = function isNeg() {
                return this.negative !== 0;
            };
            BN2.prototype.neg = function neg() {
                return this.clone().ineg();
            };
            BN2.prototype.ineg = function ineg() {
                if (!this.isZero()) {
                    this.negative ^= 1;
                }
                return this;
            };
            BN2.prototype.iuor = function iuor(num) {
                while(this.length < num.length){
                    this.words[this.length++] = 0;
                }
                for(var i = 0; i < num.length; i++){
                    this.words[i] = this.words[i] | num.words[i];
                }
                return this._strip();
            };
            BN2.prototype.ior = function ior(num) {
                assert((this.negative | num.negative) === 0);
                return this.iuor(num);
            };
            BN2.prototype.or = function or(num) {
                if (this.length > num.length) return this.clone().ior(num);
                return num.clone().ior(this);
            };
            BN2.prototype.uor = function uor(num) {
                if (this.length > num.length) return this.clone().iuor(num);
                return num.clone().iuor(this);
            };
            BN2.prototype.iuand = function iuand(num) {
                var b;
                if (this.length > num.length) {
                    b = num;
                } else {
                    b = this;
                }
                for(var i = 0; i < b.length; i++){
                    this.words[i] = this.words[i] & num.words[i];
                }
                this.length = b.length;
                return this._strip();
            };
            BN2.prototype.iand = function iand(num) {
                assert((this.negative | num.negative) === 0);
                return this.iuand(num);
            };
            BN2.prototype.and = function and(num) {
                if (this.length > num.length) return this.clone().iand(num);
                return num.clone().iand(this);
            };
            BN2.prototype.uand = function uand(num) {
                if (this.length > num.length) return this.clone().iuand(num);
                return num.clone().iuand(this);
            };
            BN2.prototype.iuxor = function iuxor(num) {
                var a;
                var b;
                if (this.length > num.length) {
                    a = this;
                    b = num;
                } else {
                    a = num;
                    b = this;
                }
                for(var i = 0; i < b.length; i++){
                    this.words[i] = a.words[i] ^ b.words[i];
                }
                if (this !== a) {
                    for(; i < a.length; i++){
                        this.words[i] = a.words[i];
                    }
                }
                this.length = a.length;
                return this._strip();
            };
            BN2.prototype.ixor = function ixor(num) {
                assert((this.negative | num.negative) === 0);
                return this.iuxor(num);
            };
            BN2.prototype.xor = function xor(num) {
                if (this.length > num.length) return this.clone().ixor(num);
                return num.clone().ixor(this);
            };
            BN2.prototype.uxor = function uxor(num) {
                if (this.length > num.length) return this.clone().iuxor(num);
                return num.clone().iuxor(this);
            };
            BN2.prototype.inotn = function inotn(width) {
                assert(typeof width === "number" && width >= 0);
                var bytesNeeded = Math.ceil(width / 26) | 0;
                var bitsLeft = width % 26;
                this._expand(bytesNeeded);
                if (bitsLeft > 0) {
                    bytesNeeded--;
                }
                for(var i = 0; i < bytesNeeded; i++){
                    this.words[i] = ~this.words[i] & 67108863;
                }
                if (bitsLeft > 0) {
                    this.words[i] = ~this.words[i] & 67108863 >> 26 - bitsLeft;
                }
                return this._strip();
            };
            BN2.prototype.notn = function notn(width) {
                return this.clone().inotn(width);
            };
            BN2.prototype.setn = function setn(bit, val) {
                assert(typeof bit === "number" && bit >= 0);
                var off = bit / 26 | 0;
                var wbit = bit % 26;
                this._expand(off + 1);
                if (val) {
                    this.words[off] = this.words[off] | 1 << wbit;
                } else {
                    this.words[off] = this.words[off] & ~(1 << wbit);
                }
                return this._strip();
            };
            BN2.prototype.iadd = function iadd(num) {
                var r;
                if (this.negative !== 0 && num.negative === 0) {
                    this.negative = 0;
                    r = this.isub(num);
                    this.negative ^= 1;
                    return this._normSign();
                } else if (this.negative === 0 && num.negative !== 0) {
                    num.negative = 0;
                    r = this.isub(num);
                    num.negative = 1;
                    return r._normSign();
                }
                var a, b;
                if (this.length > num.length) {
                    a = this;
                    b = num;
                } else {
                    a = num;
                    b = this;
                }
                var carry = 0;
                for(var i = 0; i < b.length; i++){
                    r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
                    this.words[i] = r & 67108863;
                    carry = r >>> 26;
                }
                for(; carry !== 0 && i < a.length; i++){
                    r = (a.words[i] | 0) + carry;
                    this.words[i] = r & 67108863;
                    carry = r >>> 26;
                }
                this.length = a.length;
                if (carry !== 0) {
                    this.words[this.length] = carry;
                    this.length++;
                } else if (a !== this) {
                    for(; i < a.length; i++){
                        this.words[i] = a.words[i];
                    }
                }
                return this;
            };
            BN2.prototype.add = function add(num) {
                var res;
                if (num.negative !== 0 && this.negative === 0) {
                    num.negative = 0;
                    res = this.sub(num);
                    num.negative ^= 1;
                    return res;
                } else if (num.negative === 0 && this.negative !== 0) {
                    this.negative = 0;
                    res = num.sub(this);
                    this.negative = 1;
                    return res;
                }
                if (this.length > num.length) return this.clone().iadd(num);
                return num.clone().iadd(this);
            };
            BN2.prototype.isub = function isub(num) {
                if (num.negative !== 0) {
                    num.negative = 0;
                    var r = this.iadd(num);
                    num.negative = 1;
                    return r._normSign();
                } else if (this.negative !== 0) {
                    this.negative = 0;
                    this.iadd(num);
                    this.negative = 1;
                    return this._normSign();
                }
                var cmp = this.cmp(num);
                if (cmp === 0) {
                    this.negative = 0;
                    this.length = 1;
                    this.words[0] = 0;
                    return this;
                }
                var a, b;
                if (cmp > 0) {
                    a = this;
                    b = num;
                } else {
                    a = num;
                    b = this;
                }
                var carry = 0;
                for(var i = 0; i < b.length; i++){
                    r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
                    carry = r >> 26;
                    this.words[i] = r & 67108863;
                }
                for(; carry !== 0 && i < a.length; i++){
                    r = (a.words[i] | 0) + carry;
                    carry = r >> 26;
                    this.words[i] = r & 67108863;
                }
                if (carry === 0 && i < a.length && a !== this) {
                    for(; i < a.length; i++){
                        this.words[i] = a.words[i];
                    }
                }
                this.length = Math.max(this.length, i);
                if (a !== this) {
                    this.negative = 1;
                }
                return this._strip();
            };
            BN2.prototype.sub = function sub(num) {
                return this.clone().isub(num);
            };
            var comb10MulTo = function comb10MulTo2(self2, num, out) {
                var a = self2.words;
                var b = num.words;
                var o = out.words;
                var c = 0;
                var lo;
                var mid;
                var hi;
                var a0 = a[0] | 0;
                var al0 = a0 & 8191;
                var ah0 = a0 >>> 13;
                var a1 = a[1] | 0;
                var al1 = a1 & 8191;
                var ah1 = a1 >>> 13;
                var a2 = a[2] | 0;
                var al2 = a2 & 8191;
                var ah2 = a2 >>> 13;
                var a3 = a[3] | 0;
                var al3 = a3 & 8191;
                var ah3 = a3 >>> 13;
                var a4 = a[4] | 0;
                var al4 = a4 & 8191;
                var ah4 = a4 >>> 13;
                var a5 = a[5] | 0;
                var al5 = a5 & 8191;
                var ah5 = a5 >>> 13;
                var a6 = a[6] | 0;
                var al6 = a6 & 8191;
                var ah6 = a6 >>> 13;
                var a7 = a[7] | 0;
                var al7 = a7 & 8191;
                var ah7 = a7 >>> 13;
                var a8 = a[8] | 0;
                var al8 = a8 & 8191;
                var ah8 = a8 >>> 13;
                var a9 = a[9] | 0;
                var al9 = a9 & 8191;
                var ah9 = a9 >>> 13;
                var b0 = b[0] | 0;
                var bl0 = b0 & 8191;
                var bh0 = b0 >>> 13;
                var b1 = b[1] | 0;
                var bl1 = b1 & 8191;
                var bh1 = b1 >>> 13;
                var b2 = b[2] | 0;
                var bl2 = b2 & 8191;
                var bh2 = b2 >>> 13;
                var b3 = b[3] | 0;
                var bl3 = b3 & 8191;
                var bh3 = b3 >>> 13;
                var b4 = b[4] | 0;
                var bl4 = b4 & 8191;
                var bh4 = b4 >>> 13;
                var b5 = b[5] | 0;
                var bl5 = b5 & 8191;
                var bh5 = b5 >>> 13;
                var b6 = b[6] | 0;
                var bl6 = b6 & 8191;
                var bh6 = b6 >>> 13;
                var b7 = b[7] | 0;
                var bl7 = b7 & 8191;
                var bh7 = b7 >>> 13;
                var b8 = b[8] | 0;
                var bl8 = b8 & 8191;
                var bh8 = b8 >>> 13;
                var b9 = b[9] | 0;
                var bl9 = b9 & 8191;
                var bh9 = b9 >>> 13;
                out.negative = self2.negative ^ num.negative;
                out.length = 19;
                lo = Math.imul(al0, bl0);
                mid = Math.imul(al0, bh0);
                mid = mid + Math.imul(ah0, bl0) | 0;
                hi = Math.imul(ah0, bh0);
                var w0 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
                w0 &= 67108863;
                lo = Math.imul(al1, bl0);
                mid = Math.imul(al1, bh0);
                mid = mid + Math.imul(ah1, bl0) | 0;
                hi = Math.imul(ah1, bh0);
                lo = lo + Math.imul(al0, bl1) | 0;
                mid = mid + Math.imul(al0, bh1) | 0;
                mid = mid + Math.imul(ah0, bl1) | 0;
                hi = hi + Math.imul(ah0, bh1) | 0;
                var w1 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
                w1 &= 67108863;
                lo = Math.imul(al2, bl0);
                mid = Math.imul(al2, bh0);
                mid = mid + Math.imul(ah2, bl0) | 0;
                hi = Math.imul(ah2, bh0);
                lo = lo + Math.imul(al1, bl1) | 0;
                mid = mid + Math.imul(al1, bh1) | 0;
                mid = mid + Math.imul(ah1, bl1) | 0;
                hi = hi + Math.imul(ah1, bh1) | 0;
                lo = lo + Math.imul(al0, bl2) | 0;
                mid = mid + Math.imul(al0, bh2) | 0;
                mid = mid + Math.imul(ah0, bl2) | 0;
                hi = hi + Math.imul(ah0, bh2) | 0;
                var w2 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
                w2 &= 67108863;
                lo = Math.imul(al3, bl0);
                mid = Math.imul(al3, bh0);
                mid = mid + Math.imul(ah3, bl0) | 0;
                hi = Math.imul(ah3, bh0);
                lo = lo + Math.imul(al2, bl1) | 0;
                mid = mid + Math.imul(al2, bh1) | 0;
                mid = mid + Math.imul(ah2, bl1) | 0;
                hi = hi + Math.imul(ah2, bh1) | 0;
                lo = lo + Math.imul(al1, bl2) | 0;
                mid = mid + Math.imul(al1, bh2) | 0;
                mid = mid + Math.imul(ah1, bl2) | 0;
                hi = hi + Math.imul(ah1, bh2) | 0;
                lo = lo + Math.imul(al0, bl3) | 0;
                mid = mid + Math.imul(al0, bh3) | 0;
                mid = mid + Math.imul(ah0, bl3) | 0;
                hi = hi + Math.imul(ah0, bh3) | 0;
                var w3 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
                w3 &= 67108863;
                lo = Math.imul(al4, bl0);
                mid = Math.imul(al4, bh0);
                mid = mid + Math.imul(ah4, bl0) | 0;
                hi = Math.imul(ah4, bh0);
                lo = lo + Math.imul(al3, bl1) | 0;
                mid = mid + Math.imul(al3, bh1) | 0;
                mid = mid + Math.imul(ah3, bl1) | 0;
                hi = hi + Math.imul(ah3, bh1) | 0;
                lo = lo + Math.imul(al2, bl2) | 0;
                mid = mid + Math.imul(al2, bh2) | 0;
                mid = mid + Math.imul(ah2, bl2) | 0;
                hi = hi + Math.imul(ah2, bh2) | 0;
                lo = lo + Math.imul(al1, bl3) | 0;
                mid = mid + Math.imul(al1, bh3) | 0;
                mid = mid + Math.imul(ah1, bl3) | 0;
                hi = hi + Math.imul(ah1, bh3) | 0;
                lo = lo + Math.imul(al0, bl4) | 0;
                mid = mid + Math.imul(al0, bh4) | 0;
                mid = mid + Math.imul(ah0, bl4) | 0;
                hi = hi + Math.imul(ah0, bh4) | 0;
                var w4 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
                w4 &= 67108863;
                lo = Math.imul(al5, bl0);
                mid = Math.imul(al5, bh0);
                mid = mid + Math.imul(ah5, bl0) | 0;
                hi = Math.imul(ah5, bh0);
                lo = lo + Math.imul(al4, bl1) | 0;
                mid = mid + Math.imul(al4, bh1) | 0;
                mid = mid + Math.imul(ah4, bl1) | 0;
                hi = hi + Math.imul(ah4, bh1) | 0;
                lo = lo + Math.imul(al3, bl2) | 0;
                mid = mid + Math.imul(al3, bh2) | 0;
                mid = mid + Math.imul(ah3, bl2) | 0;
                hi = hi + Math.imul(ah3, bh2) | 0;
                lo = lo + Math.imul(al2, bl3) | 0;
                mid = mid + Math.imul(al2, bh3) | 0;
                mid = mid + Math.imul(ah2, bl3) | 0;
                hi = hi + Math.imul(ah2, bh3) | 0;
                lo = lo + Math.imul(al1, bl4) | 0;
                mid = mid + Math.imul(al1, bh4) | 0;
                mid = mid + Math.imul(ah1, bl4) | 0;
                hi = hi + Math.imul(ah1, bh4) | 0;
                lo = lo + Math.imul(al0, bl5) | 0;
                mid = mid + Math.imul(al0, bh5) | 0;
                mid = mid + Math.imul(ah0, bl5) | 0;
                hi = hi + Math.imul(ah0, bh5) | 0;
                var w5 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
                w5 &= 67108863;
                lo = Math.imul(al6, bl0);
                mid = Math.imul(al6, bh0);
                mid = mid + Math.imul(ah6, bl0) | 0;
                hi = Math.imul(ah6, bh0);
                lo = lo + Math.imul(al5, bl1) | 0;
                mid = mid + Math.imul(al5, bh1) | 0;
                mid = mid + Math.imul(ah5, bl1) | 0;
                hi = hi + Math.imul(ah5, bh1) | 0;
                lo = lo + Math.imul(al4, bl2) | 0;
                mid = mid + Math.imul(al4, bh2) | 0;
                mid = mid + Math.imul(ah4, bl2) | 0;
                hi = hi + Math.imul(ah4, bh2) | 0;
                lo = lo + Math.imul(al3, bl3) | 0;
                mid = mid + Math.imul(al3, bh3) | 0;
                mid = mid + Math.imul(ah3, bl3) | 0;
                hi = hi + Math.imul(ah3, bh3) | 0;
                lo = lo + Math.imul(al2, bl4) | 0;
                mid = mid + Math.imul(al2, bh4) | 0;
                mid = mid + Math.imul(ah2, bl4) | 0;
                hi = hi + Math.imul(ah2, bh4) | 0;
                lo = lo + Math.imul(al1, bl5) | 0;
                mid = mid + Math.imul(al1, bh5) | 0;
                mid = mid + Math.imul(ah1, bl5) | 0;
                hi = hi + Math.imul(ah1, bh5) | 0;
                lo = lo + Math.imul(al0, bl6) | 0;
                mid = mid + Math.imul(al0, bh6) | 0;
                mid = mid + Math.imul(ah0, bl6) | 0;
                hi = hi + Math.imul(ah0, bh6) | 0;
                var w6 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
                w6 &= 67108863;
                lo = Math.imul(al7, bl0);
                mid = Math.imul(al7, bh0);
                mid = mid + Math.imul(ah7, bl0) | 0;
                hi = Math.imul(ah7, bh0);
                lo = lo + Math.imul(al6, bl1) | 0;
                mid = mid + Math.imul(al6, bh1) | 0;
                mid = mid + Math.imul(ah6, bl1) | 0;
                hi = hi + Math.imul(ah6, bh1) | 0;
                lo = lo + Math.imul(al5, bl2) | 0;
                mid = mid + Math.imul(al5, bh2) | 0;
                mid = mid + Math.imul(ah5, bl2) | 0;
                hi = hi + Math.imul(ah5, bh2) | 0;
                lo = lo + Math.imul(al4, bl3) | 0;
                mid = mid + Math.imul(al4, bh3) | 0;
                mid = mid + Math.imul(ah4, bl3) | 0;
                hi = hi + Math.imul(ah4, bh3) | 0;
                lo = lo + Math.imul(al3, bl4) | 0;
                mid = mid + Math.imul(al3, bh4) | 0;
                mid = mid + Math.imul(ah3, bl4) | 0;
                hi = hi + Math.imul(ah3, bh4) | 0;
                lo = lo + Math.imul(al2, bl5) | 0;
                mid = mid + Math.imul(al2, bh5) | 0;
                mid = mid + Math.imul(ah2, bl5) | 0;
                hi = hi + Math.imul(ah2, bh5) | 0;
                lo = lo + Math.imul(al1, bl6) | 0;
                mid = mid + Math.imul(al1, bh6) | 0;
                mid = mid + Math.imul(ah1, bl6) | 0;
                hi = hi + Math.imul(ah1, bh6) | 0;
                lo = lo + Math.imul(al0, bl7) | 0;
                mid = mid + Math.imul(al0, bh7) | 0;
                mid = mid + Math.imul(ah0, bl7) | 0;
                hi = hi + Math.imul(ah0, bh7) | 0;
                var w7 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
                w7 &= 67108863;
                lo = Math.imul(al8, bl0);
                mid = Math.imul(al8, bh0);
                mid = mid + Math.imul(ah8, bl0) | 0;
                hi = Math.imul(ah8, bh0);
                lo = lo + Math.imul(al7, bl1) | 0;
                mid = mid + Math.imul(al7, bh1) | 0;
                mid = mid + Math.imul(ah7, bl1) | 0;
                hi = hi + Math.imul(ah7, bh1) | 0;
                lo = lo + Math.imul(al6, bl2) | 0;
                mid = mid + Math.imul(al6, bh2) | 0;
                mid = mid + Math.imul(ah6, bl2) | 0;
                hi = hi + Math.imul(ah6, bh2) | 0;
                lo = lo + Math.imul(al5, bl3) | 0;
                mid = mid + Math.imul(al5, bh3) | 0;
                mid = mid + Math.imul(ah5, bl3) | 0;
                hi = hi + Math.imul(ah5, bh3) | 0;
                lo = lo + Math.imul(al4, bl4) | 0;
                mid = mid + Math.imul(al4, bh4) | 0;
                mid = mid + Math.imul(ah4, bl4) | 0;
                hi = hi + Math.imul(ah4, bh4) | 0;
                lo = lo + Math.imul(al3, bl5) | 0;
                mid = mid + Math.imul(al3, bh5) | 0;
                mid = mid + Math.imul(ah3, bl5) | 0;
                hi = hi + Math.imul(ah3, bh5) | 0;
                lo = lo + Math.imul(al2, bl6) | 0;
                mid = mid + Math.imul(al2, bh6) | 0;
                mid = mid + Math.imul(ah2, bl6) | 0;
                hi = hi + Math.imul(ah2, bh6) | 0;
                lo = lo + Math.imul(al1, bl7) | 0;
                mid = mid + Math.imul(al1, bh7) | 0;
                mid = mid + Math.imul(ah1, bl7) | 0;
                hi = hi + Math.imul(ah1, bh7) | 0;
                lo = lo + Math.imul(al0, bl8) | 0;
                mid = mid + Math.imul(al0, bh8) | 0;
                mid = mid + Math.imul(ah0, bl8) | 0;
                hi = hi + Math.imul(ah0, bh8) | 0;
                var w8 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
                w8 &= 67108863;
                lo = Math.imul(al9, bl0);
                mid = Math.imul(al9, bh0);
                mid = mid + Math.imul(ah9, bl0) | 0;
                hi = Math.imul(ah9, bh0);
                lo = lo + Math.imul(al8, bl1) | 0;
                mid = mid + Math.imul(al8, bh1) | 0;
                mid = mid + Math.imul(ah8, bl1) | 0;
                hi = hi + Math.imul(ah8, bh1) | 0;
                lo = lo + Math.imul(al7, bl2) | 0;
                mid = mid + Math.imul(al7, bh2) | 0;
                mid = mid + Math.imul(ah7, bl2) | 0;
                hi = hi + Math.imul(ah7, bh2) | 0;
                lo = lo + Math.imul(al6, bl3) | 0;
                mid = mid + Math.imul(al6, bh3) | 0;
                mid = mid + Math.imul(ah6, bl3) | 0;
                hi = hi + Math.imul(ah6, bh3) | 0;
                lo = lo + Math.imul(al5, bl4) | 0;
                mid = mid + Math.imul(al5, bh4) | 0;
                mid = mid + Math.imul(ah5, bl4) | 0;
                hi = hi + Math.imul(ah5, bh4) | 0;
                lo = lo + Math.imul(al4, bl5) | 0;
                mid = mid + Math.imul(al4, bh5) | 0;
                mid = mid + Math.imul(ah4, bl5) | 0;
                hi = hi + Math.imul(ah4, bh5) | 0;
                lo = lo + Math.imul(al3, bl6) | 0;
                mid = mid + Math.imul(al3, bh6) | 0;
                mid = mid + Math.imul(ah3, bl6) | 0;
                hi = hi + Math.imul(ah3, bh6) | 0;
                lo = lo + Math.imul(al2, bl7) | 0;
                mid = mid + Math.imul(al2, bh7) | 0;
                mid = mid + Math.imul(ah2, bl7) | 0;
                hi = hi + Math.imul(ah2, bh7) | 0;
                lo = lo + Math.imul(al1, bl8) | 0;
                mid = mid + Math.imul(al1, bh8) | 0;
                mid = mid + Math.imul(ah1, bl8) | 0;
                hi = hi + Math.imul(ah1, bh8) | 0;
                lo = lo + Math.imul(al0, bl9) | 0;
                mid = mid + Math.imul(al0, bh9) | 0;
                mid = mid + Math.imul(ah0, bl9) | 0;
                hi = hi + Math.imul(ah0, bh9) | 0;
                var w9 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
                w9 &= 67108863;
                lo = Math.imul(al9, bl1);
                mid = Math.imul(al9, bh1);
                mid = mid + Math.imul(ah9, bl1) | 0;
                hi = Math.imul(ah9, bh1);
                lo = lo + Math.imul(al8, bl2) | 0;
                mid = mid + Math.imul(al8, bh2) | 0;
                mid = mid + Math.imul(ah8, bl2) | 0;
                hi = hi + Math.imul(ah8, bh2) | 0;
                lo = lo + Math.imul(al7, bl3) | 0;
                mid = mid + Math.imul(al7, bh3) | 0;
                mid = mid + Math.imul(ah7, bl3) | 0;
                hi = hi + Math.imul(ah7, bh3) | 0;
                lo = lo + Math.imul(al6, bl4) | 0;
                mid = mid + Math.imul(al6, bh4) | 0;
                mid = mid + Math.imul(ah6, bl4) | 0;
                hi = hi + Math.imul(ah6, bh4) | 0;
                lo = lo + Math.imul(al5, bl5) | 0;
                mid = mid + Math.imul(al5, bh5) | 0;
                mid = mid + Math.imul(ah5, bl5) | 0;
                hi = hi + Math.imul(ah5, bh5) | 0;
                lo = lo + Math.imul(al4, bl6) | 0;
                mid = mid + Math.imul(al4, bh6) | 0;
                mid = mid + Math.imul(ah4, bl6) | 0;
                hi = hi + Math.imul(ah4, bh6) | 0;
                lo = lo + Math.imul(al3, bl7) | 0;
                mid = mid + Math.imul(al3, bh7) | 0;
                mid = mid + Math.imul(ah3, bl7) | 0;
                hi = hi + Math.imul(ah3, bh7) | 0;
                lo = lo + Math.imul(al2, bl8) | 0;
                mid = mid + Math.imul(al2, bh8) | 0;
                mid = mid + Math.imul(ah2, bl8) | 0;
                hi = hi + Math.imul(ah2, bh8) | 0;
                lo = lo + Math.imul(al1, bl9) | 0;
                mid = mid + Math.imul(al1, bh9) | 0;
                mid = mid + Math.imul(ah1, bl9) | 0;
                hi = hi + Math.imul(ah1, bh9) | 0;
                var w10 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
                w10 &= 67108863;
                lo = Math.imul(al9, bl2);
                mid = Math.imul(al9, bh2);
                mid = mid + Math.imul(ah9, bl2) | 0;
                hi = Math.imul(ah9, bh2);
                lo = lo + Math.imul(al8, bl3) | 0;
                mid = mid + Math.imul(al8, bh3) | 0;
                mid = mid + Math.imul(ah8, bl3) | 0;
                hi = hi + Math.imul(ah8, bh3) | 0;
                lo = lo + Math.imul(al7, bl4) | 0;
                mid = mid + Math.imul(al7, bh4) | 0;
                mid = mid + Math.imul(ah7, bl4) | 0;
                hi = hi + Math.imul(ah7, bh4) | 0;
                lo = lo + Math.imul(al6, bl5) | 0;
                mid = mid + Math.imul(al6, bh5) | 0;
                mid = mid + Math.imul(ah6, bl5) | 0;
                hi = hi + Math.imul(ah6, bh5) | 0;
                lo = lo + Math.imul(al5, bl6) | 0;
                mid = mid + Math.imul(al5, bh6) | 0;
                mid = mid + Math.imul(ah5, bl6) | 0;
                hi = hi + Math.imul(ah5, bh6) | 0;
                lo = lo + Math.imul(al4, bl7) | 0;
                mid = mid + Math.imul(al4, bh7) | 0;
                mid = mid + Math.imul(ah4, bl7) | 0;
                hi = hi + Math.imul(ah4, bh7) | 0;
                lo = lo + Math.imul(al3, bl8) | 0;
                mid = mid + Math.imul(al3, bh8) | 0;
                mid = mid + Math.imul(ah3, bl8) | 0;
                hi = hi + Math.imul(ah3, bh8) | 0;
                lo = lo + Math.imul(al2, bl9) | 0;
                mid = mid + Math.imul(al2, bh9) | 0;
                mid = mid + Math.imul(ah2, bl9) | 0;
                hi = hi + Math.imul(ah2, bh9) | 0;
                var w11 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
                w11 &= 67108863;
                lo = Math.imul(al9, bl3);
                mid = Math.imul(al9, bh3);
                mid = mid + Math.imul(ah9, bl3) | 0;
                hi = Math.imul(ah9, bh3);
                lo = lo + Math.imul(al8, bl4) | 0;
                mid = mid + Math.imul(al8, bh4) | 0;
                mid = mid + Math.imul(ah8, bl4) | 0;
                hi = hi + Math.imul(ah8, bh4) | 0;
                lo = lo + Math.imul(al7, bl5) | 0;
                mid = mid + Math.imul(al7, bh5) | 0;
                mid = mid + Math.imul(ah7, bl5) | 0;
                hi = hi + Math.imul(ah7, bh5) | 0;
                lo = lo + Math.imul(al6, bl6) | 0;
                mid = mid + Math.imul(al6, bh6) | 0;
                mid = mid + Math.imul(ah6, bl6) | 0;
                hi = hi + Math.imul(ah6, bh6) | 0;
                lo = lo + Math.imul(al5, bl7) | 0;
                mid = mid + Math.imul(al5, bh7) | 0;
                mid = mid + Math.imul(ah5, bl7) | 0;
                hi = hi + Math.imul(ah5, bh7) | 0;
                lo = lo + Math.imul(al4, bl8) | 0;
                mid = mid + Math.imul(al4, bh8) | 0;
                mid = mid + Math.imul(ah4, bl8) | 0;
                hi = hi + Math.imul(ah4, bh8) | 0;
                lo = lo + Math.imul(al3, bl9) | 0;
                mid = mid + Math.imul(al3, bh9) | 0;
                mid = mid + Math.imul(ah3, bl9) | 0;
                hi = hi + Math.imul(ah3, bh9) | 0;
                var w12 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
                w12 &= 67108863;
                lo = Math.imul(al9, bl4);
                mid = Math.imul(al9, bh4);
                mid = mid + Math.imul(ah9, bl4) | 0;
                hi = Math.imul(ah9, bh4);
                lo = lo + Math.imul(al8, bl5) | 0;
                mid = mid + Math.imul(al8, bh5) | 0;
                mid = mid + Math.imul(ah8, bl5) | 0;
                hi = hi + Math.imul(ah8, bh5) | 0;
                lo = lo + Math.imul(al7, bl6) | 0;
                mid = mid + Math.imul(al7, bh6) | 0;
                mid = mid + Math.imul(ah7, bl6) | 0;
                hi = hi + Math.imul(ah7, bh6) | 0;
                lo = lo + Math.imul(al6, bl7) | 0;
                mid = mid + Math.imul(al6, bh7) | 0;
                mid = mid + Math.imul(ah6, bl7) | 0;
                hi = hi + Math.imul(ah6, bh7) | 0;
                lo = lo + Math.imul(al5, bl8) | 0;
                mid = mid + Math.imul(al5, bh8) | 0;
                mid = mid + Math.imul(ah5, bl8) | 0;
                hi = hi + Math.imul(ah5, bh8) | 0;
                lo = lo + Math.imul(al4, bl9) | 0;
                mid = mid + Math.imul(al4, bh9) | 0;
                mid = mid + Math.imul(ah4, bl9) | 0;
                hi = hi + Math.imul(ah4, bh9) | 0;
                var w13 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
                w13 &= 67108863;
                lo = Math.imul(al9, bl5);
                mid = Math.imul(al9, bh5);
                mid = mid + Math.imul(ah9, bl5) | 0;
                hi = Math.imul(ah9, bh5);
                lo = lo + Math.imul(al8, bl6) | 0;
                mid = mid + Math.imul(al8, bh6) | 0;
                mid = mid + Math.imul(ah8, bl6) | 0;
                hi = hi + Math.imul(ah8, bh6) | 0;
                lo = lo + Math.imul(al7, bl7) | 0;
                mid = mid + Math.imul(al7, bh7) | 0;
                mid = mid + Math.imul(ah7, bl7) | 0;
                hi = hi + Math.imul(ah7, bh7) | 0;
                lo = lo + Math.imul(al6, bl8) | 0;
                mid = mid + Math.imul(al6, bh8) | 0;
                mid = mid + Math.imul(ah6, bl8) | 0;
                hi = hi + Math.imul(ah6, bh8) | 0;
                lo = lo + Math.imul(al5, bl9) | 0;
                mid = mid + Math.imul(al5, bh9) | 0;
                mid = mid + Math.imul(ah5, bl9) | 0;
                hi = hi + Math.imul(ah5, bh9) | 0;
                var w14 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
                w14 &= 67108863;
                lo = Math.imul(al9, bl6);
                mid = Math.imul(al9, bh6);
                mid = mid + Math.imul(ah9, bl6) | 0;
                hi = Math.imul(ah9, bh6);
                lo = lo + Math.imul(al8, bl7) | 0;
                mid = mid + Math.imul(al8, bh7) | 0;
                mid = mid + Math.imul(ah8, bl7) | 0;
                hi = hi + Math.imul(ah8, bh7) | 0;
                lo = lo + Math.imul(al7, bl8) | 0;
                mid = mid + Math.imul(al7, bh8) | 0;
                mid = mid + Math.imul(ah7, bl8) | 0;
                hi = hi + Math.imul(ah7, bh8) | 0;
                lo = lo + Math.imul(al6, bl9) | 0;
                mid = mid + Math.imul(al6, bh9) | 0;
                mid = mid + Math.imul(ah6, bl9) | 0;
                hi = hi + Math.imul(ah6, bh9) | 0;
                var w15 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
                w15 &= 67108863;
                lo = Math.imul(al9, bl7);
                mid = Math.imul(al9, bh7);
                mid = mid + Math.imul(ah9, bl7) | 0;
                hi = Math.imul(ah9, bh7);
                lo = lo + Math.imul(al8, bl8) | 0;
                mid = mid + Math.imul(al8, bh8) | 0;
                mid = mid + Math.imul(ah8, bl8) | 0;
                hi = hi + Math.imul(ah8, bh8) | 0;
                lo = lo + Math.imul(al7, bl9) | 0;
                mid = mid + Math.imul(al7, bh9) | 0;
                mid = mid + Math.imul(ah7, bl9) | 0;
                hi = hi + Math.imul(ah7, bh9) | 0;
                var w16 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
                w16 &= 67108863;
                lo = Math.imul(al9, bl8);
                mid = Math.imul(al9, bh8);
                mid = mid + Math.imul(ah9, bl8) | 0;
                hi = Math.imul(ah9, bh8);
                lo = lo + Math.imul(al8, bl9) | 0;
                mid = mid + Math.imul(al8, bh9) | 0;
                mid = mid + Math.imul(ah8, bl9) | 0;
                hi = hi + Math.imul(ah8, bh9) | 0;
                var w17 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
                w17 &= 67108863;
                lo = Math.imul(al9, bl9);
                mid = Math.imul(al9, bh9);
                mid = mid + Math.imul(ah9, bl9) | 0;
                hi = Math.imul(ah9, bh9);
                var w18 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
                w18 &= 67108863;
                o[0] = w0;
                o[1] = w1;
                o[2] = w2;
                o[3] = w3;
                o[4] = w4;
                o[5] = w5;
                o[6] = w6;
                o[7] = w7;
                o[8] = w8;
                o[9] = w9;
                o[10] = w10;
                o[11] = w11;
                o[12] = w12;
                o[13] = w13;
                o[14] = w14;
                o[15] = w15;
                o[16] = w16;
                o[17] = w17;
                o[18] = w18;
                if (c !== 0) {
                    o[19] = c;
                    out.length++;
                }
                return out;
            };
            if (!Math.imul) {
                comb10MulTo = smallMulTo;
            }
            BN2.prototype.mulTo = function mulTo(num, out) {
                var res;
                var len = this.length + num.length;
                if (this.length === 10 && num.length === 10) {
                    res = comb10MulTo(this, num, out);
                } else if (len < 63) {
                    res = smallMulTo(this, num, out);
                } else if (len < 1024) {
                    res = bigMulTo(this, num, out);
                } else {
                    res = jumboMulTo(this, num, out);
                }
                return res;
            };
            FFTM.prototype.makeRBT = function makeRBT(N) {
                var t = new Array(N);
                var l = BN2.prototype._countBits(N) - 1;
                for(var i = 0; i < N; i++){
                    t[i] = this.revBin(i, l, N);
                }
                return t;
            };
            FFTM.prototype.revBin = function revBin(x, l, N) {
                if (x === 0 || x === N - 1) return x;
                var rb = 0;
                for(var i = 0; i < l; i++){
                    rb |= (x & 1) << l - i - 1;
                    x >>= 1;
                }
                return rb;
            };
            FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
                for(var i = 0; i < N; i++){
                    rtws[i] = rws[rbt[i]];
                    itws[i] = iws[rbt[i]];
                }
            };
            FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
                this.permute(rbt, rws, iws, rtws, itws, N);
                for(var s = 1; s < N; s <<= 1){
                    var l = s << 1;
                    var rtwdf = Math.cos(2 * Math.PI / l);
                    var itwdf = Math.sin(2 * Math.PI / l);
                    for(var p = 0; p < N; p += l){
                        var rtwdf_ = rtwdf;
                        var itwdf_ = itwdf;
                        for(var j = 0; j < s; j++){
                            var re = rtws[p + j];
                            var ie = itws[p + j];
                            var ro = rtws[p + j + s];
                            var io = itws[p + j + s];
                            var rx = rtwdf_ * ro - itwdf_ * io;
                            io = rtwdf_ * io + itwdf_ * ro;
                            ro = rx;
                            rtws[p + j] = re + ro;
                            itws[p + j] = ie + io;
                            rtws[p + j + s] = re - ro;
                            itws[p + j + s] = ie - io;
                            if (j !== l) {
                                rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                                itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                                rtwdf_ = rx;
                            }
                        }
                    }
                }
            };
            FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
                var N = Math.max(m, n) | 1;
                var odd = N & 1;
                var i = 0;
                for(N = N / 2 | 0; N; N = N >>> 1){
                    i++;
                }
                return 1 << i + 1 + odd;
            };
            FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
                if (N <= 1) return;
                for(var i = 0; i < N / 2; i++){
                    var t = rws[i];
                    rws[i] = rws[N - i - 1];
                    rws[N - i - 1] = t;
                    t = iws[i];
                    iws[i] = -iws[N - i - 1];
                    iws[N - i - 1] = -t;
                }
            };
            FFTM.prototype.normalize13b = function normalize13b(ws, N) {
                var carry = 0;
                for(var i = 0; i < N / 2; i++){
                    var w = Math.round(ws[2 * i + 1] / N) * 8192 + Math.round(ws[2 * i] / N) + carry;
                    ws[i] = w & 67108863;
                    if (w < 67108864) {
                        carry = 0;
                    } else {
                        carry = w / 67108864 | 0;
                    }
                }
                return ws;
            };
            FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
                var carry = 0;
                for(var i = 0; i < len; i++){
                    carry = carry + (ws[i] | 0);
                    rws[2 * i] = carry & 8191;
                    carry = carry >>> 13;
                    rws[2 * i + 1] = carry & 8191;
                    carry = carry >>> 13;
                }
                for(i = 2 * len; i < N; ++i){
                    rws[i] = 0;
                }
                assert(carry === 0);
                assert((carry & ~8191) === 0);
            };
            FFTM.prototype.stub = function stub(N) {
                var ph = new Array(N);
                for(var i = 0; i < N; i++){
                    ph[i] = 0;
                }
                return ph;
            };
            FFTM.prototype.mulp = function mulp(x, y, out) {
                var N = 2 * this.guessLen13b(x.length, y.length);
                var rbt = this.makeRBT(N);
                var _ = this.stub(N);
                var rws = new Array(N);
                var rwst = new Array(N);
                var iwst = new Array(N);
                var nrws = new Array(N);
                var nrwst = new Array(N);
                var niwst = new Array(N);
                var rmws = out.words;
                rmws.length = N;
                this.convert13b(x.words, x.length, rws, N);
                this.convert13b(y.words, y.length, nrws, N);
                this.transform(rws, _, rwst, iwst, N, rbt);
                this.transform(nrws, _, nrwst, niwst, N, rbt);
                for(var i = 0; i < N; i++){
                    var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
                    iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
                    rwst[i] = rx;
                }
                this.conjugate(rwst, iwst, N);
                this.transform(rwst, iwst, rmws, _, N, rbt);
                this.conjugate(rmws, _, N);
                this.normalize13b(rmws, N);
                out.negative = x.negative ^ y.negative;
                out.length = x.length + y.length;
                return out._strip();
            };
            BN2.prototype.mul = function mul(num) {
                var out = new BN2(null);
                out.words = new Array(this.length + num.length);
                return this.mulTo(num, out);
            };
            BN2.prototype.mulf = function mulf(num) {
                var out = new BN2(null);
                out.words = new Array(this.length + num.length);
                return jumboMulTo(this, num, out);
            };
            BN2.prototype.imul = function imul(num) {
                return this.clone().mulTo(num, this);
            };
            BN2.prototype.imuln = function imuln(num) {
                var isNegNum = num < 0;
                if (isNegNum) num = -num;
                assert(typeof num === "number");
                assert(num < 67108864);
                var carry = 0;
                for(var i = 0; i < this.length; i++){
                    var w = (this.words[i] | 0) * num;
                    var lo = (w & 67108863) + (carry & 67108863);
                    carry >>= 26;
                    carry += w / 67108864 | 0;
                    carry += lo >>> 26;
                    this.words[i] = lo & 67108863;
                }
                if (carry !== 0) {
                    this.words[i] = carry;
                    this.length++;
                }
                return isNegNum ? this.ineg() : this;
            };
            BN2.prototype.muln = function muln(num) {
                return this.clone().imuln(num);
            };
            BN2.prototype.sqr = function sqr() {
                return this.mul(this);
            };
            BN2.prototype.isqr = function isqr() {
                return this.imul(this.clone());
            };
            BN2.prototype.pow = function pow(num) {
                var w = toBitArray(num);
                if (w.length === 0) return new BN2(1);
                var res = this;
                for(var i = 0; i < w.length; i++, res = res.sqr()){
                    if (w[i] !== 0) break;
                }
                if (++i < w.length) {
                    for(var q = res.sqr(); i < w.length; i++, q = q.sqr()){
                        if (w[i] === 0) continue;
                        res = res.mul(q);
                    }
                }
                return res;
            };
            BN2.prototype.iushln = function iushln(bits) {
                assert(typeof bits === "number" && bits >= 0);
                var r = bits % 26;
                var s = (bits - r) / 26;
                var carryMask = 67108863 >>> 26 - r << 26 - r;
                var i;
                if (r !== 0) {
                    var carry = 0;
                    for(i = 0; i < this.length; i++){
                        var newCarry = this.words[i] & carryMask;
                        var c = (this.words[i] | 0) - newCarry << r;
                        this.words[i] = c | carry;
                        carry = newCarry >>> 26 - r;
                    }
                    if (carry) {
                        this.words[i] = carry;
                        this.length++;
                    }
                }
                if (s !== 0) {
                    for(i = this.length - 1; i >= 0; i--){
                        this.words[i + s] = this.words[i];
                    }
                    for(i = 0; i < s; i++){
                        this.words[i] = 0;
                    }
                    this.length += s;
                }
                return this._strip();
            };
            BN2.prototype.ishln = function ishln(bits) {
                assert(this.negative === 0);
                return this.iushln(bits);
            };
            BN2.prototype.iushrn = function iushrn(bits, hint, extended) {
                assert(typeof bits === "number" && bits >= 0);
                var h;
                if (hint) {
                    h = (hint - hint % 26) / 26;
                } else {
                    h = 0;
                }
                var r = bits % 26;
                var s = Math.min((bits - r) / 26, this.length);
                var mask = 67108863 ^ 67108863 >>> r << r;
                var maskedWords = extended;
                h -= s;
                h = Math.max(0, h);
                if (maskedWords) {
                    for(var i = 0; i < s; i++){
                        maskedWords.words[i] = this.words[i];
                    }
                    maskedWords.length = s;
                }
                if (s === 0) {} else if (this.length > s) {
                    this.length -= s;
                    for(i = 0; i < this.length; i++){
                        this.words[i] = this.words[i + s];
                    }
                } else {
                    this.words[0] = 0;
                    this.length = 1;
                }
                var carry = 0;
                for(i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--){
                    var word = this.words[i] | 0;
                    this.words[i] = carry << 26 - r | word >>> r;
                    carry = word & mask;
                }
                if (maskedWords && carry !== 0) {
                    maskedWords.words[maskedWords.length++] = carry;
                }
                if (this.length === 0) {
                    this.words[0] = 0;
                    this.length = 1;
                }
                return this._strip();
            };
            BN2.prototype.ishrn = function ishrn(bits, hint, extended) {
                assert(this.negative === 0);
                return this.iushrn(bits, hint, extended);
            };
            BN2.prototype.shln = function shln(bits) {
                return this.clone().ishln(bits);
            };
            BN2.prototype.ushln = function ushln(bits) {
                return this.clone().iushln(bits);
            };
            BN2.prototype.shrn = function shrn(bits) {
                return this.clone().ishrn(bits);
            };
            BN2.prototype.ushrn = function ushrn(bits) {
                return this.clone().iushrn(bits);
            };
            BN2.prototype.testn = function testn(bit) {
                assert(typeof bit === "number" && bit >= 0);
                var r = bit % 26;
                var s = (bit - r) / 26;
                var q = 1 << r;
                if (this.length <= s) return false;
                var w = this.words[s];
                return !!(w & q);
            };
            BN2.prototype.imaskn = function imaskn(bits) {
                assert(typeof bits === "number" && bits >= 0);
                var r = bits % 26;
                var s = (bits - r) / 26;
                assert(this.negative === 0, "imaskn works only with positive numbers");
                if (this.length <= s) {
                    return this;
                }
                if (r !== 0) {
                    s++;
                }
                this.length = Math.min(s, this.length);
                if (r !== 0) {
                    var mask = 67108863 ^ 67108863 >>> r << r;
                    this.words[this.length - 1] &= mask;
                }
                return this._strip();
            };
            BN2.prototype.maskn = function maskn(bits) {
                return this.clone().imaskn(bits);
            };
            BN2.prototype.iaddn = function iaddn(num) {
                assert(typeof num === "number");
                assert(num < 67108864);
                if (num < 0) return this.isubn(-num);
                if (this.negative !== 0) {
                    if (this.length === 1 && (this.words[0] | 0) <= num) {
                        this.words[0] = num - (this.words[0] | 0);
                        this.negative = 0;
                        return this;
                    }
                    this.negative = 0;
                    this.isubn(num);
                    this.negative = 1;
                    return this;
                }
                return this._iaddn(num);
            };
            BN2.prototype._iaddn = function _iaddn(num) {
                this.words[0] += num;
                for(var i = 0; i < this.length && this.words[i] >= 67108864; i++){
                    this.words[i] -= 67108864;
                    if (i === this.length - 1) {
                        this.words[i + 1] = 1;
                    } else {
                        this.words[i + 1]++;
                    }
                }
                this.length = Math.max(this.length, i + 1);
                return this;
            };
            BN2.prototype.isubn = function isubn(num) {
                assert(typeof num === "number");
                assert(num < 67108864);
                if (num < 0) return this.iaddn(-num);
                if (this.negative !== 0) {
                    this.negative = 0;
                    this.iaddn(num);
                    this.negative = 1;
                    return this;
                }
                this.words[0] -= num;
                if (this.length === 1 && this.words[0] < 0) {
                    this.words[0] = -this.words[0];
                    this.negative = 1;
                } else {
                    for(var i = 0; i < this.length && this.words[i] < 0; i++){
                        this.words[i] += 67108864;
                        this.words[i + 1] -= 1;
                    }
                }
                return this._strip();
            };
            BN2.prototype.addn = function addn(num) {
                return this.clone().iaddn(num);
            };
            BN2.prototype.subn = function subn(num) {
                return this.clone().isubn(num);
            };
            BN2.prototype.iabs = function iabs() {
                this.negative = 0;
                return this;
            };
            BN2.prototype.abs = function abs() {
                return this.clone().iabs();
            };
            BN2.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
                var len = num.length + shift;
                var i;
                this._expand(len);
                var w;
                var carry = 0;
                for(i = 0; i < num.length; i++){
                    w = (this.words[i + shift] | 0) + carry;
                    var right = (num.words[i] | 0) * mul;
                    w -= right & 67108863;
                    carry = (w >> 26) - (right / 67108864 | 0);
                    this.words[i + shift] = w & 67108863;
                }
                for(; i < this.length - shift; i++){
                    w = (this.words[i + shift] | 0) + carry;
                    carry = w >> 26;
                    this.words[i + shift] = w & 67108863;
                }
                if (carry === 0) return this._strip();
                assert(carry === -1);
                carry = 0;
                for(i = 0; i < this.length; i++){
                    w = -(this.words[i] | 0) + carry;
                    carry = w >> 26;
                    this.words[i] = w & 67108863;
                }
                this.negative = 1;
                return this._strip();
            };
            BN2.prototype._wordDiv = function _wordDiv(num, mode) {
                var shift = this.length - num.length;
                var a = this.clone();
                var b = num;
                var bhi = b.words[b.length - 1] | 0;
                var bhiBits = this._countBits(bhi);
                shift = 26 - bhiBits;
                if (shift !== 0) {
                    b = b.ushln(shift);
                    a.iushln(shift);
                    bhi = b.words[b.length - 1] | 0;
                }
                var m = a.length - b.length;
                var q;
                if (mode !== "mod") {
                    q = new BN2(null);
                    q.length = m + 1;
                    q.words = new Array(q.length);
                    for(var i = 0; i < q.length; i++){
                        q.words[i] = 0;
                    }
                }
                var diff = a.clone()._ishlnsubmul(b, 1, m);
                if (diff.negative === 0) {
                    a = diff;
                    if (q) {
                        q.words[m] = 1;
                    }
                }
                for(var j = m - 1; j >= 0; j--){
                    var qj = (a.words[b.length + j] | 0) * 67108864 + (a.words[b.length + j - 1] | 0);
                    qj = Math.min(qj / bhi | 0, 67108863);
                    a._ishlnsubmul(b, qj, j);
                    while(a.negative !== 0){
                        qj--;
                        a.negative = 0;
                        a._ishlnsubmul(b, 1, j);
                        if (!a.isZero()) {
                            a.negative ^= 1;
                        }
                    }
                    if (q) {
                        q.words[j] = qj;
                    }
                }
                if (q) {
                    q._strip();
                }
                a._strip();
                if (mode !== "div" && shift !== 0) {
                    a.iushrn(shift);
                }
                return {
                    div: q || null,
                    mod: a
                };
            };
            BN2.prototype.divmod = function divmod(num, mode, positive) {
                assert(!num.isZero());
                if (this.isZero()) {
                    return {
                        div: new BN2(0),
                        mod: new BN2(0)
                    };
                }
                var div, mod, res;
                if (this.negative !== 0 && num.negative === 0) {
                    res = this.neg().divmod(num, mode);
                    if (mode !== "mod") {
                        div = res.div.neg();
                    }
                    if (mode !== "div") {
                        mod = res.mod.neg();
                        if (positive && mod.negative !== 0) {
                            mod.iadd(num);
                        }
                    }
                    return {
                        div: div,
                        mod: mod
                    };
                }
                if (this.negative === 0 && num.negative !== 0) {
                    res = this.divmod(num.neg(), mode);
                    if (mode !== "mod") {
                        div = res.div.neg();
                    }
                    return {
                        div: div,
                        mod: res.mod
                    };
                }
                if ((this.negative & num.negative) !== 0) {
                    res = this.neg().divmod(num.neg(), mode);
                    if (mode !== "div") {
                        mod = res.mod.neg();
                        if (positive && mod.negative !== 0) {
                            mod.isub(num);
                        }
                    }
                    return {
                        div: res.div,
                        mod: mod
                    };
                }
                if (num.length > this.length || this.cmp(num) < 0) {
                    return {
                        div: new BN2(0),
                        mod: this
                    };
                }
                if (num.length === 1) {
                    if (mode === "div") {
                        return {
                            div: this.divn(num.words[0]),
                            mod: null
                        };
                    }
                    if (mode === "mod") {
                        return {
                            div: null,
                            mod: new BN2(this.modrn(num.words[0]))
                        };
                    }
                    return {
                        div: this.divn(num.words[0]),
                        mod: new BN2(this.modrn(num.words[0]))
                    };
                }
                return this._wordDiv(num, mode);
            };
            BN2.prototype.div = function div(num) {
                return this.divmod(num, "div", false).div;
            };
            BN2.prototype.mod = function mod(num) {
                return this.divmod(num, "mod", false).mod;
            };
            BN2.prototype.umod = function umod(num) {
                return this.divmod(num, "mod", true).mod;
            };
            BN2.prototype.divRound = function divRound(num) {
                var dm = this.divmod(num);
                if (dm.mod.isZero()) return dm.div;
                var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
                var half = num.ushrn(1);
                var r2 = num.andln(1);
                var cmp = mod.cmp(half);
                if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;
                return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
            };
            BN2.prototype.modrn = function modrn(num) {
                var isNegNum = num < 0;
                if (isNegNum) num = -num;
                assert(num <= 67108863);
                var p = (1 << 26) % num;
                var acc = 0;
                for(var i = this.length - 1; i >= 0; i--){
                    acc = (p * acc + (this.words[i] | 0)) % num;
                }
                return isNegNum ? -acc : acc;
            };
            BN2.prototype.modn = function modn(num) {
                return this.modrn(num);
            };
            BN2.prototype.idivn = function idivn(num) {
                var isNegNum = num < 0;
                if (isNegNum) num = -num;
                assert(num <= 67108863);
                var carry = 0;
                for(var i = this.length - 1; i >= 0; i--){
                    var w = (this.words[i] | 0) + carry * 67108864;
                    this.words[i] = w / num | 0;
                    carry = w % num;
                }
                this._strip();
                return isNegNum ? this.ineg() : this;
            };
            BN2.prototype.divn = function divn(num) {
                return this.clone().idivn(num);
            };
            BN2.prototype.egcd = function egcd(p) {
                assert(p.negative === 0);
                assert(!p.isZero());
                var x = this;
                var y = p.clone();
                if (x.negative !== 0) {
                    x = x.umod(p);
                } else {
                    x = x.clone();
                }
                var A = new BN2(1);
                var B = new BN2(0);
                var C = new BN2(0);
                var D = new BN2(1);
                var g = 0;
                while(x.isEven() && y.isEven()){
                    x.iushrn(1);
                    y.iushrn(1);
                    ++g;
                }
                var yp = y.clone();
                var xp = x.clone();
                while(!x.isZero()){
                    for(var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
                    if (i > 0) {
                        x.iushrn(i);
                        while(i-- > 0){
                            if (A.isOdd() || B.isOdd()) {
                                A.iadd(yp);
                                B.isub(xp);
                            }
                            A.iushrn(1);
                            B.iushrn(1);
                        }
                    }
                    for(var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
                    if (j > 0) {
                        y.iushrn(j);
                        while(j-- > 0){
                            if (C.isOdd() || D.isOdd()) {
                                C.iadd(yp);
                                D.isub(xp);
                            }
                            C.iushrn(1);
                            D.iushrn(1);
                        }
                    }
                    if (x.cmp(y) >= 0) {
                        x.isub(y);
                        A.isub(C);
                        B.isub(D);
                    } else {
                        y.isub(x);
                        C.isub(A);
                        D.isub(B);
                    }
                }
                return {
                    a: C,
                    b: D,
                    gcd: y.iushln(g)
                };
            };
            BN2.prototype._invmp = function _invmp(p) {
                assert(p.negative === 0);
                assert(!p.isZero());
                var a = this;
                var b = p.clone();
                if (a.negative !== 0) {
                    a = a.umod(p);
                } else {
                    a = a.clone();
                }
                var x1 = new BN2(1);
                var x2 = new BN2(0);
                var delta = b.clone();
                while(a.cmpn(1) > 0 && b.cmpn(1) > 0){
                    for(var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
                    if (i > 0) {
                        a.iushrn(i);
                        while(i-- > 0){
                            if (x1.isOdd()) {
                                x1.iadd(delta);
                            }
                            x1.iushrn(1);
                        }
                    }
                    for(var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
                    if (j > 0) {
                        b.iushrn(j);
                        while(j-- > 0){
                            if (x2.isOdd()) {
                                x2.iadd(delta);
                            }
                            x2.iushrn(1);
                        }
                    }
                    if (a.cmp(b) >= 0) {
                        a.isub(b);
                        x1.isub(x2);
                    } else {
                        b.isub(a);
                        x2.isub(x1);
                    }
                }
                var res;
                if (a.cmpn(1) === 0) {
                    res = x1;
                } else {
                    res = x2;
                }
                if (res.cmpn(0) < 0) {
                    res.iadd(p);
                }
                return res;
            };
            BN2.prototype.gcd = function gcd(num) {
                if (this.isZero()) return num.abs();
                if (num.isZero()) return this.abs();
                var a = this.clone();
                var b = num.clone();
                a.negative = 0;
                b.negative = 0;
                for(var shift = 0; a.isEven() && b.isEven(); shift++){
                    a.iushrn(1);
                    b.iushrn(1);
                }
                do {
                    while(a.isEven()){
                        a.iushrn(1);
                    }
                    while(b.isEven()){
                        b.iushrn(1);
                    }
                    var r = a.cmp(b);
                    if (r < 0) {
                        var t = a;
                        a = b;
                        b = t;
                    } else if (r === 0 || b.cmpn(1) === 0) {
                        break;
                    }
                    a.isub(b);
                }while (true);
                return b.iushln(shift);
            };
            BN2.prototype.invm = function invm(num) {
                return this.egcd(num).a.umod(num);
            };
            BN2.prototype.isEven = function isEven() {
                return (this.words[0] & 1) === 0;
            };
            BN2.prototype.isOdd = function isOdd() {
                return (this.words[0] & 1) === 1;
            };
            BN2.prototype.andln = function andln(num) {
                return this.words[0] & num;
            };
            BN2.prototype.bincn = function bincn(bit) {
                assert(typeof bit === "number");
                var r = bit % 26;
                var s = (bit - r) / 26;
                var q = 1 << r;
                if (this.length <= s) {
                    this._expand(s + 1);
                    this.words[s] |= q;
                    return this;
                }
                var carry = q;
                for(var i = s; carry !== 0 && i < this.length; i++){
                    var w = this.words[i] | 0;
                    w += carry;
                    carry = w >>> 26;
                    w &= 67108863;
                    this.words[i] = w;
                }
                if (carry !== 0) {
                    this.words[i] = carry;
                    this.length++;
                }
                return this;
            };
            BN2.prototype.isZero = function isZero() {
                return this.length === 1 && this.words[0] === 0;
            };
            BN2.prototype.cmpn = function cmpn(num) {
                var negative = num < 0;
                if (this.negative !== 0 && !negative) return -1;
                if (this.negative === 0 && negative) return 1;
                this._strip();
                var res;
                if (this.length > 1) {
                    res = 1;
                } else {
                    if (negative) {
                        num = -num;
                    }
                    assert(num <= 67108863, "Number is too big");
                    var w = this.words[0] | 0;
                    res = w === num ? 0 : w < num ? -1 : 1;
                }
                if (this.negative !== 0) return -res | 0;
                return res;
            };
            BN2.prototype.cmp = function cmp(num) {
                if (this.negative !== 0 && num.negative === 0) return -1;
                if (this.negative === 0 && num.negative !== 0) return 1;
                var res = this.ucmp(num);
                if (this.negative !== 0) return -res | 0;
                return res;
            };
            BN2.prototype.ucmp = function ucmp(num) {
                if (this.length > num.length) return 1;
                if (this.length < num.length) return -1;
                var res = 0;
                for(var i = this.length - 1; i >= 0; i--){
                    var a = this.words[i] | 0;
                    var b = num.words[i] | 0;
                    if (a === b) continue;
                    if (a < b) {
                        res = -1;
                    } else if (a > b) {
                        res = 1;
                    }
                    break;
                }
                return res;
            };
            BN2.prototype.gtn = function gtn(num) {
                return this.cmpn(num) === 1;
            };
            BN2.prototype.gt = function gt(num) {
                return this.cmp(num) === 1;
            };
            BN2.prototype.gten = function gten(num) {
                return this.cmpn(num) >= 0;
            };
            BN2.prototype.gte = function gte(num) {
                return this.cmp(num) >= 0;
            };
            BN2.prototype.ltn = function ltn(num) {
                return this.cmpn(num) === -1;
            };
            BN2.prototype.lt = function lt(num) {
                return this.cmp(num) === -1;
            };
            BN2.prototype.lten = function lten(num) {
                return this.cmpn(num) <= 0;
            };
            BN2.prototype.lte = function lte(num) {
                return this.cmp(num) <= 0;
            };
            BN2.prototype.eqn = function eqn(num) {
                return this.cmpn(num) === 0;
            };
            BN2.prototype.eq = function eq(num) {
                return this.cmp(num) === 0;
            };
            BN2.red = function red(num) {
                return new Red(num);
            };
            BN2.prototype.toRed = function toRed(ctx) {
                assert(!this.red, "Already a number in reduction context");
                assert(this.negative === 0, "red works only with positives");
                return ctx.convertTo(this)._forceRed(ctx);
            };
            BN2.prototype.fromRed = function fromRed() {
                assert(this.red, "fromRed works only with numbers in reduction context");
                return this.red.convertFrom(this);
            };
            BN2.prototype._forceRed = function _forceRed(ctx) {
                this.red = ctx;
                return this;
            };
            BN2.prototype.forceRed = function forceRed(ctx) {
                assert(!this.red, "Already a number in reduction context");
                return this._forceRed(ctx);
            };
            BN2.prototype.redAdd = function redAdd(num) {
                assert(this.red, "redAdd works only with red numbers");
                return this.red.add(this, num);
            };
            BN2.prototype.redIAdd = function redIAdd(num) {
                assert(this.red, "redIAdd works only with red numbers");
                return this.red.iadd(this, num);
            };
            BN2.prototype.redSub = function redSub(num) {
                assert(this.red, "redSub works only with red numbers");
                return this.red.sub(this, num);
            };
            BN2.prototype.redISub = function redISub(num) {
                assert(this.red, "redISub works only with red numbers");
                return this.red.isub(this, num);
            };
            BN2.prototype.redShl = function redShl(num) {
                assert(this.red, "redShl works only with red numbers");
                return this.red.shl(this, num);
            };
            BN2.prototype.redMul = function redMul(num) {
                assert(this.red, "redMul works only with red numbers");
                this.red._verify2(this, num);
                return this.red.mul(this, num);
            };
            BN2.prototype.redIMul = function redIMul(num) {
                assert(this.red, "redMul works only with red numbers");
                this.red._verify2(this, num);
                return this.red.imul(this, num);
            };
            BN2.prototype.redSqr = function redSqr() {
                assert(this.red, "redSqr works only with red numbers");
                this.red._verify1(this);
                return this.red.sqr(this);
            };
            BN2.prototype.redISqr = function redISqr() {
                assert(this.red, "redISqr works only with red numbers");
                this.red._verify1(this);
                return this.red.isqr(this);
            };
            BN2.prototype.redSqrt = function redSqrt() {
                assert(this.red, "redSqrt works only with red numbers");
                this.red._verify1(this);
                return this.red.sqrt(this);
            };
            BN2.prototype.redInvm = function redInvm() {
                assert(this.red, "redInvm works only with red numbers");
                this.red._verify1(this);
                return this.red.invm(this);
            };
            BN2.prototype.redNeg = function redNeg() {
                assert(this.red, "redNeg works only with red numbers");
                this.red._verify1(this);
                return this.red.neg(this);
            };
            BN2.prototype.redPow = function redPow(num) {
                assert(this.red && !num.red, "redPow(normalNum)");
                this.red._verify1(this);
                return this.red.pow(this, num);
            };
            var primes = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };
            MPrime.prototype._tmp = function _tmp() {
                var tmp = new BN2(null);
                tmp.words = new Array(Math.ceil(this.n / 13));
                return tmp;
            };
            MPrime.prototype.ireduce = function ireduce(num) {
                var r = num;
                var rlen;
                do {
                    this.split(r, this.tmp);
                    r = this.imulK(r);
                    r = r.iadd(this.tmp);
                    rlen = r.bitLength();
                }while (rlen > this.n);
                var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
                if (cmp === 0) {
                    r.words[0] = 0;
                    r.length = 1;
                } else if (cmp > 0) {
                    r.isub(this.p);
                } else {
                    if (r.strip !== void 0) {
                        r.strip();
                    } else {
                        r._strip();
                    }
                }
                return r;
            };
            MPrime.prototype.split = function split(input, out) {
                input.iushrn(this.n, 0, out);
            };
            MPrime.prototype.imulK = function imulK(num) {
                return num.imul(this.k);
            };
            inherits(K256, MPrime);
            K256.prototype.split = function split(input, output) {
                var mask = 4194303;
                var outLen = Math.min(input.length, 9);
                for(var i = 0; i < outLen; i++){
                    output.words[i] = input.words[i];
                }
                output.length = outLen;
                if (input.length <= 9) {
                    input.words[0] = 0;
                    input.length = 1;
                    return;
                }
                var prev = input.words[9];
                output.words[output.length++] = prev & mask;
                for(i = 10; i < input.length; i++){
                    var next = input.words[i] | 0;
                    input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
                    prev = next;
                }
                prev >>>= 22;
                input.words[i - 10] = prev;
                if (prev === 0 && input.length > 10) {
                    input.length -= 10;
                } else {
                    input.length -= 9;
                }
            };
            K256.prototype.imulK = function imulK(num) {
                num.words[num.length] = 0;
                num.words[num.length + 1] = 0;
                num.length += 2;
                var lo = 0;
                for(var i = 0; i < num.length; i++){
                    var w = num.words[i] | 0;
                    lo += w * 977;
                    num.words[i] = lo & 67108863;
                    lo = w * 64 + (lo / 67108864 | 0);
                }
                if (num.words[num.length - 1] === 0) {
                    num.length--;
                    if (num.words[num.length - 1] === 0) {
                        num.length--;
                    }
                }
                return num;
            };
            inherits(P224, MPrime);
            inherits(P192, MPrime);
            inherits(P25519, MPrime);
            P25519.prototype.imulK = function imulK(num) {
                var carry = 0;
                for(var i = 0; i < num.length; i++){
                    var hi = (num.words[i] | 0) * 19 + carry;
                    var lo = hi & 67108863;
                    hi >>>= 26;
                    num.words[i] = lo;
                    carry = hi;
                }
                if (carry !== 0) {
                    num.words[num.length++] = carry;
                }
                return num;
            };
            BN2._prime = function prime(name) {
                if (primes[name]) return primes[name];
                var prime2;
                if (name === "k256") {
                    prime2 = new K256();
                } else if (name === "p224") {
                    prime2 = new P224();
                } else if (name === "p192") {
                    prime2 = new P192();
                } else if (name === "p25519") {
                    prime2 = new P25519();
                } else {
                    throw new Error("Unknown prime " + name);
                }
                primes[name] = prime2;
                return prime2;
            };
            Red.prototype._verify1 = function _verify1(a) {
                assert(a.negative === 0, "red works only with positives");
                assert(a.red, "red works only with red numbers");
            };
            Red.prototype._verify2 = function _verify2(a, b) {
                assert((a.negative | b.negative) === 0, "red works only with positives");
                assert(a.red && a.red === b.red, "red works only with red numbers");
            };
            Red.prototype.imod = function imod(a) {
                if (this.prime) return this.prime.ireduce(a)._forceRed(this);
                move(a, a.umod(this.m)._forceRed(this));
                return a;
            };
            Red.prototype.neg = function neg(a) {
                if (a.isZero()) {
                    return a.clone();
                }
                return this.m.sub(a)._forceRed(this);
            };
            Red.prototype.add = function add(a, b) {
                this._verify2(a, b);
                var res = a.add(b);
                if (res.cmp(this.m) >= 0) {
                    res.isub(this.m);
                }
                return res._forceRed(this);
            };
            Red.prototype.iadd = function iadd(a, b) {
                this._verify2(a, b);
                var res = a.iadd(b);
                if (res.cmp(this.m) >= 0) {
                    res.isub(this.m);
                }
                return res;
            };
            Red.prototype.sub = function sub(a, b) {
                this._verify2(a, b);
                var res = a.sub(b);
                if (res.cmpn(0) < 0) {
                    res.iadd(this.m);
                }
                return res._forceRed(this);
            };
            Red.prototype.isub = function isub(a, b) {
                this._verify2(a, b);
                var res = a.isub(b);
                if (res.cmpn(0) < 0) {
                    res.iadd(this.m);
                }
                return res;
            };
            Red.prototype.shl = function shl(a, num) {
                this._verify1(a);
                return this.imod(a.ushln(num));
            };
            Red.prototype.imul = function imul(a, b) {
                this._verify2(a, b);
                return this.imod(a.imul(b));
            };
            Red.prototype.mul = function mul(a, b) {
                this._verify2(a, b);
                return this.imod(a.mul(b));
            };
            Red.prototype.isqr = function isqr(a) {
                return this.imul(a, a.clone());
            };
            Red.prototype.sqr = function sqr(a) {
                return this.mul(a, a);
            };
            Red.prototype.sqrt = function sqrt(a) {
                if (a.isZero()) return a.clone();
                var mod3 = this.m.andln(3);
                assert(mod3 % 2 === 1);
                if (mod3 === 3) {
                    var pow = this.m.add(new BN2(1)).iushrn(2);
                    return this.pow(a, pow);
                }
                var q = this.m.subn(1);
                var s = 0;
                while(!q.isZero() && q.andln(1) === 0){
                    s++;
                    q.iushrn(1);
                }
                assert(!q.isZero());
                var one = new BN2(1).toRed(this);
                var nOne = one.redNeg();
                var lpow = this.m.subn(1).iushrn(1);
                var z = this.m.bitLength();
                z = new BN2(2 * z * z).toRed(this);
                while(this.pow(z, lpow).cmp(nOne) !== 0){
                    z.redIAdd(nOne);
                }
                var c = this.pow(z, q);
                var r = this.pow(a, q.addn(1).iushrn(1));
                var t = this.pow(a, q);
                var m = s;
                while(t.cmp(one) !== 0){
                    var tmp = t;
                    for(var i = 0; tmp.cmp(one) !== 0; i++){
                        tmp = tmp.redSqr();
                    }
                    assert(i < m);
                    var b = this.pow(c, new BN2(1).iushln(m - i - 1));
                    r = r.redMul(b);
                    c = b.redSqr();
                    t = t.redMul(c);
                    m = i;
                }
                return r;
            };
            Red.prototype.invm = function invm(a) {
                var inv = a._invmp(this.m);
                if (inv.negative !== 0) {
                    inv.negative = 0;
                    return this.imod(inv).redNeg();
                } else {
                    return this.imod(inv);
                }
            };
            Red.prototype.pow = function pow(a, num) {
                if (num.isZero()) return new BN2(1).toRed(this);
                if (num.cmpn(1) === 0) return a.clone();
                var windowSize = 4;
                var wnd = new Array(1 << windowSize);
                wnd[0] = new BN2(1).toRed(this);
                wnd[1] = a;
                for(var i = 2; i < wnd.length; i++){
                    wnd[i] = this.mul(wnd[i - 1], a);
                }
                var res = wnd[0];
                var current = 0;
                var currentLen = 0;
                var start = num.bitLength() % 26;
                if (start === 0) {
                    start = 26;
                }
                for(i = num.length - 1; i >= 0; i--){
                    var word = num.words[i];
                    for(var j = start - 1; j >= 0; j--){
                        var bit = word >> j & 1;
                        if (res !== wnd[0]) {
                            res = this.sqr(res);
                        }
                        if (bit === 0 && current === 0) {
                            currentLen = 0;
                            continue;
                        }
                        current <<= 1;
                        current |= bit;
                        currentLen++;
                        if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
                        res = this.mul(res, wnd[current]);
                        currentLen = 0;
                        current = 0;
                    }
                    start = 26;
                }
                return res;
            };
            Red.prototype.convertTo = function convertTo(num) {
                var r = num.umod(this.m);
                return r === num ? r.clone() : r;
            };
            Red.prototype.convertFrom = function convertFrom(num) {
                var res = num.clone();
                res.red = null;
                return res;
            };
            BN2.mont = function mont(num) {
                return new Mont(num);
            };
            inherits(Mont, Red);
            Mont.prototype.convertTo = function convertTo(num) {
                return this.imod(num.ushln(this.shift));
            };
            Mont.prototype.convertFrom = function convertFrom(num) {
                var r = this.imod(num.mul(this.rinv));
                r.red = null;
                return r;
            };
            Mont.prototype.imul = function imul(a, b) {
                if (a.isZero() || b.isZero()) {
                    a.words[0] = 0;
                    a.length = 1;
                    return a;
                }
                var t = a.imul(b);
                var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
                var u = t.isub(c).iushrn(this.shift);
                var res = u;
                if (u.cmp(this.m) >= 0) {
                    res = u.isub(this.m);
                } else if (u.cmpn(0) < 0) {
                    res = u.iadd(this.m);
                }
                return res._forceRed(this);
            };
            Mont.prototype.mul = function mul(a, b) {
                if (a.isZero() || b.isZero()) return new BN2(0)._forceRed(this);
                var t = a.mul(b);
                var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
                var u = t.isub(c).iushrn(this.shift);
                var res = u;
                if (u.cmp(this.m) >= 0) {
                    res = u.isub(this.m);
                } else if (u.cmpn(0) < 0) {
                    res = u.iadd(this.m);
                }
                return res._forceRed(this);
            };
            Mont.prototype.invm = function invm(a) {
                var res = this.imod(a._invmp(this.m).mul(this.r2));
                return res._forceRed(this);
            };
        })(typeof module2 === "undefined" || module2, exports);
    }
});
// ../../node_modules/js-sha3/src/sha3.js
var require_sha3 = __commonJS({
    "../../node_modules/js-sha3/src/sha3.js": function(exports, module2) {
        (function() {
            "use strict";
            var Keccak = function Keccak(bits2, padding, outputBits) {
                this.blocks = [];
                this.s = [];
                this.padding = padding;
                this.outputBits = outputBits;
                this.reset = true;
                this.finalized = false;
                this.block = 0;
                this.start = 0;
                this.blockCount = 1600 - (bits2 << 1) >> 5;
                this.byteCount = this.blockCount << 2;
                this.outputBlocks = outputBits >> 5;
                this.extraBytes = (outputBits & 31) >> 3;
                for(var i2 = 0; i2 < 50; ++i2){
                    this.s[i2] = 0;
                }
            };
            var Kmac = function Kmac(bits2, padding, outputBits) {
                Keccak.call(this, bits2, padding, outputBits);
            };
            var INPUT_ERROR = "input is invalid type";
            var FINALIZE_ERROR = "finalize already called";
            var WINDOW = typeof window === "object";
            var root = WINDOW ? window : {};
            if (root.JS_SHA3_NO_WINDOW) {
                WINDOW = false;
            }
            var WEB_WORKER = !WINDOW && typeof self === "object";
            var NODE_JS = !root.JS_SHA3_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
            if (NODE_JS) {
                root = global;
            } else if (WEB_WORKER) {
                root = self;
            }
            var COMMON_JS = !root.JS_SHA3_NO_COMMON_JS && typeof module2 === "object" && module2.exports;
            var AMD = typeof define === "function" && define.amd;
            var ARRAY_BUFFER = !root.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
            var HEX_CHARS = "0123456789abcdef".split("");
            var SHAKE_PADDING = [
                31,
                7936,
                2031616,
                520093696
            ];
            var CSHAKE_PADDING = [
                4,
                1024,
                262144,
                67108864
            ];
            var KECCAK_PADDING = [
                1,
                256,
                65536,
                16777216
            ];
            var PADDING = [
                6,
                1536,
                393216,
                100663296
            ];
            var SHIFT = [
                0,
                8,
                16,
                24
            ];
            var RC = [
                1,
                0,
                32898,
                0,
                32906,
                2147483648,
                2147516416,
                2147483648,
                32907,
                0,
                2147483649,
                0,
                2147516545,
                2147483648,
                32777,
                2147483648,
                138,
                0,
                136,
                0,
                2147516425,
                0,
                2147483658,
                0,
                2147516555,
                0,
                139,
                2147483648,
                32905,
                2147483648,
                32771,
                2147483648,
                32770,
                2147483648,
                128,
                2147483648,
                32778,
                0,
                2147483658,
                2147483648,
                2147516545,
                2147483648,
                32896,
                2147483648,
                2147483649,
                0,
                2147516424,
                2147483648
            ];
            var BITS = [
                224,
                256,
                384,
                512
            ];
            var SHAKE_BITS = [
                128,
                256
            ];
            var OUTPUT_TYPES = [
                "hex",
                "buffer",
                "arrayBuffer",
                "array",
                "digest"
            ];
            var CSHAKE_BYTEPAD = {
                "128": 168,
                "256": 136
            };
            if (root.JS_SHA3_NO_NODE_JS || !Array.isArray) {
                Array.isArray = function(obj) {
                    return Object.prototype.toString.call(obj) === "[object Array]";
                };
            }
            if (ARRAY_BUFFER && (root.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
                ArrayBuffer.isView = function(obj) {
                    return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
                };
            }
            var createOutputMethod = function createOutputMethod(bits2, padding, outputType) {
                return function(message) {
                    return new Keccak(bits2, padding, bits2).update(message)[outputType]();
                };
            };
            var createShakeOutputMethod = function createShakeOutputMethod(bits2, padding, outputType) {
                return function(message, outputBits) {
                    return new Keccak(bits2, padding, outputBits).update(message)[outputType]();
                };
            };
            var createCshakeOutputMethod = function createCshakeOutputMethod(bits2, padding, outputType) {
                return function(message, outputBits, n, s) {
                    return methods["cshake" + bits2].update(message, outputBits, n, s)[outputType]();
                };
            };
            var createKmacOutputMethod = function createKmacOutputMethod(bits2, padding, outputType) {
                return function(key, message, outputBits, s) {
                    return methods["kmac" + bits2].update(key, message, outputBits, s)[outputType]();
                };
            };
            var createOutputMethods = function createOutputMethods(method, createMethod2, bits2, padding) {
                for(var i2 = 0; i2 < OUTPUT_TYPES.length; ++i2){
                    var type = OUTPUT_TYPES[i2];
                    method[type] = createMethod2(bits2, padding, type);
                }
                return method;
            };
            var createMethod = function createMethod(bits2, padding) {
                var method = createOutputMethod(bits2, padding, "hex");
                method.create = function() {
                    return new Keccak(bits2, padding, bits2);
                };
                method.update = function(message) {
                    return method.create().update(message);
                };
                return createOutputMethods(method, createOutputMethod, bits2, padding);
            };
            var createShakeMethod = function createShakeMethod(bits2, padding) {
                var method = createShakeOutputMethod(bits2, padding, "hex");
                method.create = function(outputBits) {
                    return new Keccak(bits2, padding, outputBits);
                };
                method.update = function(message, outputBits) {
                    return method.create(outputBits).update(message);
                };
                return createOutputMethods(method, createShakeOutputMethod, bits2, padding);
            };
            var createCshakeMethod = function createCshakeMethod(bits2, padding) {
                var w = CSHAKE_BYTEPAD[bits2];
                var method = createCshakeOutputMethod(bits2, padding, "hex");
                method.create = function(outputBits, n, s) {
                    if (!n && !s) {
                        return methods["shake" + bits2].create(outputBits);
                    } else {
                        return new Keccak(bits2, padding, outputBits).bytepad([
                            n,
                            s
                        ], w);
                    }
                };
                method.update = function(message, outputBits, n, s) {
                    return method.create(outputBits, n, s).update(message);
                };
                return createOutputMethods(method, createCshakeOutputMethod, bits2, padding);
            };
            var createKmacMethod = function createKmacMethod(bits2, padding) {
                var w = CSHAKE_BYTEPAD[bits2];
                var method = createKmacOutputMethod(bits2, padding, "hex");
                method.create = function(key, outputBits, s) {
                    return new Kmac(bits2, padding, outputBits).bytepad([
                        "KMAC",
                        s
                    ], w).bytepad([
                        key
                    ], w);
                };
                method.update = function(key, message, outputBits, s) {
                    return method.create(key, outputBits, s).update(message);
                };
                return createOutputMethods(method, createKmacOutputMethod, bits2, padding);
            };
            var algorithms = [
                {
                    name: "keccak",
                    padding: KECCAK_PADDING,
                    bits: BITS,
                    createMethod: createMethod
                },
                {
                    name: "sha3",
                    padding: PADDING,
                    bits: BITS,
                    createMethod: createMethod
                },
                {
                    name: "shake",
                    padding: SHAKE_PADDING,
                    bits: SHAKE_BITS,
                    createMethod: createShakeMethod
                },
                {
                    name: "cshake",
                    padding: CSHAKE_PADDING,
                    bits: SHAKE_BITS,
                    createMethod: createCshakeMethod
                },
                {
                    name: "kmac",
                    padding: CSHAKE_PADDING,
                    bits: SHAKE_BITS,
                    createMethod: createKmacMethod
                }
            ];
            var methods = {}, methodNames = [];
            for(var i = 0; i < algorithms.length; ++i){
                var algorithm = algorithms[i];
                var bits = algorithm.bits;
                for(var j = 0; j < bits.length; ++j){
                    var methodName = algorithm.name + "_" + bits[j];
                    methodNames.push(methodName);
                    methods[methodName] = algorithm.createMethod(bits[j], algorithm.padding);
                    if (algorithm.name !== "sha3") {
                        var newMethodName = algorithm.name + bits[j];
                        methodNames.push(newMethodName);
                        methods[newMethodName] = methods[methodName];
                    }
                }
            }
            Keccak.prototype.update = function(message) {
                if (this.finalized) {
                    throw new Error(FINALIZE_ERROR);
                }
                var notString, type = typeof message === "undefined" ? "undefined" : _typeof(message);
                if (type !== "string") {
                    if (type === "object") {
                        if (message === null) {
                            throw new Error(INPUT_ERROR);
                        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
                            message = new Uint8Array(message);
                        } else if (!Array.isArray(message)) {
                            if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
                                throw new Error(INPUT_ERROR);
                            }
                        }
                    } else {
                        throw new Error(INPUT_ERROR);
                    }
                    notString = true;
                }
                var blocks = this.blocks, byteCount = this.byteCount, length = message.length, blockCount = this.blockCount, index = 0, s = this.s, i2, code;
                while(index < length){
                    if (this.reset) {
                        this.reset = false;
                        blocks[0] = this.block;
                        for(i2 = 1; i2 < blockCount + 1; ++i2){
                            blocks[i2] = 0;
                        }
                    }
                    if (notString) {
                        for(i2 = this.start; index < length && i2 < byteCount; ++index){
                            blocks[i2 >> 2] |= message[index] << SHIFT[i2++ & 3];
                        }
                    } else {
                        for(i2 = this.start; index < length && i2 < byteCount; ++index){
                            code = message.charCodeAt(index);
                            if (code < 128) {
                                blocks[i2 >> 2] |= code << SHIFT[i2++ & 3];
                            } else if (code < 2048) {
                                blocks[i2 >> 2] |= (192 | code >> 6) << SHIFT[i2++ & 3];
                                blocks[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
                            } else if (code < 55296 || code >= 57344) {
                                blocks[i2 >> 2] |= (224 | code >> 12) << SHIFT[i2++ & 3];
                                blocks[i2 >> 2] |= (128 | code >> 6 & 63) << SHIFT[i2++ & 3];
                                blocks[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
                            } else {
                                code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index) & 1023);
                                blocks[i2 >> 2] |= (240 | code >> 18) << SHIFT[i2++ & 3];
                                blocks[i2 >> 2] |= (128 | code >> 12 & 63) << SHIFT[i2++ & 3];
                                blocks[i2 >> 2] |= (128 | code >> 6 & 63) << SHIFT[i2++ & 3];
                                blocks[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
                            }
                        }
                    }
                    this.lastByteIndex = i2;
                    if (i2 >= byteCount) {
                        this.start = i2 - byteCount;
                        this.block = blocks[blockCount];
                        for(i2 = 0; i2 < blockCount; ++i2){
                            s[i2] ^= blocks[i2];
                        }
                        f(s);
                        this.reset = true;
                    } else {
                        this.start = i2;
                    }
                }
                return this;
            };
            Keccak.prototype.encode = function(x, right) {
                var o = x & 255, n = 1;
                var bytes = [
                    o
                ];
                x = x >> 8;
                o = x & 255;
                while(o > 0){
                    bytes.unshift(o);
                    x = x >> 8;
                    o = x & 255;
                    ++n;
                }
                if (right) {
                    bytes.push(n);
                } else {
                    bytes.unshift(n);
                }
                this.update(bytes);
                return bytes.length;
            };
            Keccak.prototype.encodeString = function(str) {
                var notString, type = typeof str === "undefined" ? "undefined" : _typeof(str);
                if (type !== "string") {
                    if (type === "object") {
                        if (str === null) {
                            throw new Error(INPUT_ERROR);
                        } else if (ARRAY_BUFFER && str.constructor === ArrayBuffer) {
                            str = new Uint8Array(str);
                        } else if (!Array.isArray(str)) {
                            if (!ARRAY_BUFFER || !ArrayBuffer.isView(str)) {
                                throw new Error(INPUT_ERROR);
                            }
                        }
                    } else {
                        throw new Error(INPUT_ERROR);
                    }
                    notString = true;
                }
                var bytes = 0, length = str.length;
                if (notString) {
                    bytes = length;
                } else {
                    for(var i2 = 0; i2 < str.length; ++i2){
                        var code = str.charCodeAt(i2);
                        if (code < 128) {
                            bytes += 1;
                        } else if (code < 2048) {
                            bytes += 2;
                        } else if (code < 55296 || code >= 57344) {
                            bytes += 3;
                        } else {
                            code = 65536 + ((code & 1023) << 10 | str.charCodeAt(++i2) & 1023);
                            bytes += 4;
                        }
                    }
                }
                bytes += this.encode(bytes * 8);
                this.update(str);
                return bytes;
            };
            Keccak.prototype.bytepad = function(strs, w) {
                var bytes = this.encode(w);
                for(var i2 = 0; i2 < strs.length; ++i2){
                    bytes += this.encodeString(strs[i2]);
                }
                var paddingBytes = w - bytes % w;
                var zeros = [];
                zeros.length = paddingBytes;
                this.update(zeros);
                return this;
            };
            Keccak.prototype.finalize = function() {
                if (this.finalized) {
                    return;
                }
                this.finalized = true;
                var blocks = this.blocks, i2 = this.lastByteIndex, blockCount = this.blockCount, s = this.s;
                blocks[i2 >> 2] |= this.padding[i2 & 3];
                if (this.lastByteIndex === this.byteCount) {
                    blocks[0] = blocks[blockCount];
                    for(i2 = 1; i2 < blockCount + 1; ++i2){
                        blocks[i2] = 0;
                    }
                }
                blocks[blockCount - 1] |= 2147483648;
                for(i2 = 0; i2 < blockCount; ++i2){
                    s[i2] ^= blocks[i2];
                }
                f(s);
            };
            Keccak.prototype.toString = Keccak.prototype.hex = function() {
                this.finalize();
                var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i2 = 0, j2 = 0;
                var hex = "", block;
                while(j2 < outputBlocks){
                    for(i2 = 0; i2 < blockCount && j2 < outputBlocks; ++i2, ++j2){
                        block = s[i2];
                        hex += HEX_CHARS[block >> 4 & 15] + HEX_CHARS[block & 15] + HEX_CHARS[block >> 12 & 15] + HEX_CHARS[block >> 8 & 15] + HEX_CHARS[block >> 20 & 15] + HEX_CHARS[block >> 16 & 15] + HEX_CHARS[block >> 28 & 15] + HEX_CHARS[block >> 24 & 15];
                    }
                    if (j2 % blockCount === 0) {
                        f(s);
                        i2 = 0;
                    }
                }
                if (extraBytes) {
                    block = s[i2];
                    hex += HEX_CHARS[block >> 4 & 15] + HEX_CHARS[block & 15];
                    if (extraBytes > 1) {
                        hex += HEX_CHARS[block >> 12 & 15] + HEX_CHARS[block >> 8 & 15];
                    }
                    if (extraBytes > 2) {
                        hex += HEX_CHARS[block >> 20 & 15] + HEX_CHARS[block >> 16 & 15];
                    }
                }
                return hex;
            };
            Keccak.prototype.arrayBuffer = function() {
                this.finalize();
                var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i2 = 0, j2 = 0;
                var bytes = this.outputBits >> 3;
                var buffer;
                if (extraBytes) {
                    buffer = new ArrayBuffer(outputBlocks + 1 << 2);
                } else {
                    buffer = new ArrayBuffer(bytes);
                }
                var array = new Uint32Array(buffer);
                while(j2 < outputBlocks){
                    for(i2 = 0; i2 < blockCount && j2 < outputBlocks; ++i2, ++j2){
                        array[j2] = s[i2];
                    }
                    if (j2 % blockCount === 0) {
                        f(s);
                    }
                }
                if (extraBytes) {
                    array[i2] = s[i2];
                    buffer = buffer.slice(0, bytes);
                }
                return buffer;
            };
            Keccak.prototype.buffer = Keccak.prototype.arrayBuffer;
            Keccak.prototype.digest = Keccak.prototype.array = function() {
                this.finalize();
                var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i2 = 0, j2 = 0;
                var array = [], offset, block;
                while(j2 < outputBlocks){
                    for(i2 = 0; i2 < blockCount && j2 < outputBlocks; ++i2, ++j2){
                        offset = j2 << 2;
                        block = s[i2];
                        array[offset] = block & 255;
                        array[offset + 1] = block >> 8 & 255;
                        array[offset + 2] = block >> 16 & 255;
                        array[offset + 3] = block >> 24 & 255;
                    }
                    if (j2 % blockCount === 0) {
                        f(s);
                    }
                }
                if (extraBytes) {
                    offset = j2 << 2;
                    block = s[i2];
                    array[offset] = block & 255;
                    if (extraBytes > 1) {
                        array[offset + 1] = block >> 8 & 255;
                    }
                    if (extraBytes > 2) {
                        array[offset + 2] = block >> 16 & 255;
                    }
                }
                return array;
            };
            Kmac.prototype = new Keccak();
            Kmac.prototype.finalize = function() {
                this.encode(this.outputBits, true);
                return Keccak.prototype.finalize.call(this);
            };
            var f = function f(s) {
                var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
                for(n = 0; n < 48; n += 2){
                    c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
                    c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
                    c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
                    c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
                    c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
                    c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
                    c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
                    c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
                    c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
                    c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
                    h = c8 ^ (c2 << 1 | c3 >>> 31);
                    l = c9 ^ (c3 << 1 | c2 >>> 31);
                    s[0] ^= h;
                    s[1] ^= l;
                    s[10] ^= h;
                    s[11] ^= l;
                    s[20] ^= h;
                    s[21] ^= l;
                    s[30] ^= h;
                    s[31] ^= l;
                    s[40] ^= h;
                    s[41] ^= l;
                    h = c0 ^ (c4 << 1 | c5 >>> 31);
                    l = c1 ^ (c5 << 1 | c4 >>> 31);
                    s[2] ^= h;
                    s[3] ^= l;
                    s[12] ^= h;
                    s[13] ^= l;
                    s[22] ^= h;
                    s[23] ^= l;
                    s[32] ^= h;
                    s[33] ^= l;
                    s[42] ^= h;
                    s[43] ^= l;
                    h = c2 ^ (c6 << 1 | c7 >>> 31);
                    l = c3 ^ (c7 << 1 | c6 >>> 31);
                    s[4] ^= h;
                    s[5] ^= l;
                    s[14] ^= h;
                    s[15] ^= l;
                    s[24] ^= h;
                    s[25] ^= l;
                    s[34] ^= h;
                    s[35] ^= l;
                    s[44] ^= h;
                    s[45] ^= l;
                    h = c4 ^ (c8 << 1 | c9 >>> 31);
                    l = c5 ^ (c9 << 1 | c8 >>> 31);
                    s[6] ^= h;
                    s[7] ^= l;
                    s[16] ^= h;
                    s[17] ^= l;
                    s[26] ^= h;
                    s[27] ^= l;
                    s[36] ^= h;
                    s[37] ^= l;
                    s[46] ^= h;
                    s[47] ^= l;
                    h = c6 ^ (c0 << 1 | c1 >>> 31);
                    l = c7 ^ (c1 << 1 | c0 >>> 31);
                    s[8] ^= h;
                    s[9] ^= l;
                    s[18] ^= h;
                    s[19] ^= l;
                    s[28] ^= h;
                    s[29] ^= l;
                    s[38] ^= h;
                    s[39] ^= l;
                    s[48] ^= h;
                    s[49] ^= l;
                    b0 = s[0];
                    b1 = s[1];
                    b32 = s[11] << 4 | s[10] >>> 28;
                    b33 = s[10] << 4 | s[11] >>> 28;
                    b14 = s[20] << 3 | s[21] >>> 29;
                    b15 = s[21] << 3 | s[20] >>> 29;
                    b46 = s[31] << 9 | s[30] >>> 23;
                    b47 = s[30] << 9 | s[31] >>> 23;
                    b28 = s[40] << 18 | s[41] >>> 14;
                    b29 = s[41] << 18 | s[40] >>> 14;
                    b20 = s[2] << 1 | s[3] >>> 31;
                    b21 = s[3] << 1 | s[2] >>> 31;
                    b2 = s[13] << 12 | s[12] >>> 20;
                    b3 = s[12] << 12 | s[13] >>> 20;
                    b34 = s[22] << 10 | s[23] >>> 22;
                    b35 = s[23] << 10 | s[22] >>> 22;
                    b16 = s[33] << 13 | s[32] >>> 19;
                    b17 = s[32] << 13 | s[33] >>> 19;
                    b48 = s[42] << 2 | s[43] >>> 30;
                    b49 = s[43] << 2 | s[42] >>> 30;
                    b40 = s[5] << 30 | s[4] >>> 2;
                    b41 = s[4] << 30 | s[5] >>> 2;
                    b22 = s[14] << 6 | s[15] >>> 26;
                    b23 = s[15] << 6 | s[14] >>> 26;
                    b4 = s[25] << 11 | s[24] >>> 21;
                    b5 = s[24] << 11 | s[25] >>> 21;
                    b36 = s[34] << 15 | s[35] >>> 17;
                    b37 = s[35] << 15 | s[34] >>> 17;
                    b18 = s[45] << 29 | s[44] >>> 3;
                    b19 = s[44] << 29 | s[45] >>> 3;
                    b10 = s[6] << 28 | s[7] >>> 4;
                    b11 = s[7] << 28 | s[6] >>> 4;
                    b42 = s[17] << 23 | s[16] >>> 9;
                    b43 = s[16] << 23 | s[17] >>> 9;
                    b24 = s[26] << 25 | s[27] >>> 7;
                    b25 = s[27] << 25 | s[26] >>> 7;
                    b6 = s[36] << 21 | s[37] >>> 11;
                    b7 = s[37] << 21 | s[36] >>> 11;
                    b38 = s[47] << 24 | s[46] >>> 8;
                    b39 = s[46] << 24 | s[47] >>> 8;
                    b30 = s[8] << 27 | s[9] >>> 5;
                    b31 = s[9] << 27 | s[8] >>> 5;
                    b12 = s[18] << 20 | s[19] >>> 12;
                    b13 = s[19] << 20 | s[18] >>> 12;
                    b44 = s[29] << 7 | s[28] >>> 25;
                    b45 = s[28] << 7 | s[29] >>> 25;
                    b26 = s[38] << 8 | s[39] >>> 24;
                    b27 = s[39] << 8 | s[38] >>> 24;
                    b8 = s[48] << 14 | s[49] >>> 18;
                    b9 = s[49] << 14 | s[48] >>> 18;
                    s[0] = b0 ^ ~b2 & b4;
                    s[1] = b1 ^ ~b3 & b5;
                    s[10] = b10 ^ ~b12 & b14;
                    s[11] = b11 ^ ~b13 & b15;
                    s[20] = b20 ^ ~b22 & b24;
                    s[21] = b21 ^ ~b23 & b25;
                    s[30] = b30 ^ ~b32 & b34;
                    s[31] = b31 ^ ~b33 & b35;
                    s[40] = b40 ^ ~b42 & b44;
                    s[41] = b41 ^ ~b43 & b45;
                    s[2] = b2 ^ ~b4 & b6;
                    s[3] = b3 ^ ~b5 & b7;
                    s[12] = b12 ^ ~b14 & b16;
                    s[13] = b13 ^ ~b15 & b17;
                    s[22] = b22 ^ ~b24 & b26;
                    s[23] = b23 ^ ~b25 & b27;
                    s[32] = b32 ^ ~b34 & b36;
                    s[33] = b33 ^ ~b35 & b37;
                    s[42] = b42 ^ ~b44 & b46;
                    s[43] = b43 ^ ~b45 & b47;
                    s[4] = b4 ^ ~b6 & b8;
                    s[5] = b5 ^ ~b7 & b9;
                    s[14] = b14 ^ ~b16 & b18;
                    s[15] = b15 ^ ~b17 & b19;
                    s[24] = b24 ^ ~b26 & b28;
                    s[25] = b25 ^ ~b27 & b29;
                    s[34] = b34 ^ ~b36 & b38;
                    s[35] = b35 ^ ~b37 & b39;
                    s[44] = b44 ^ ~b46 & b48;
                    s[45] = b45 ^ ~b47 & b49;
                    s[6] = b6 ^ ~b8 & b0;
                    s[7] = b7 ^ ~b9 & b1;
                    s[16] = b16 ^ ~b18 & b10;
                    s[17] = b17 ^ ~b19 & b11;
                    s[26] = b26 ^ ~b28 & b20;
                    s[27] = b27 ^ ~b29 & b21;
                    s[36] = b36 ^ ~b38 & b30;
                    s[37] = b37 ^ ~b39 & b31;
                    s[46] = b46 ^ ~b48 & b40;
                    s[47] = b47 ^ ~b49 & b41;
                    s[8] = b8 ^ ~b0 & b2;
                    s[9] = b9 ^ ~b1 & b3;
                    s[18] = b18 ^ ~b10 & b12;
                    s[19] = b19 ^ ~b11 & b13;
                    s[28] = b28 ^ ~b20 & b22;
                    s[29] = b29 ^ ~b21 & b23;
                    s[38] = b38 ^ ~b30 & b32;
                    s[39] = b39 ^ ~b31 & b33;
                    s[48] = b48 ^ ~b40 & b42;
                    s[49] = b49 ^ ~b41 & b43;
                    s[0] ^= RC[n];
                    s[1] ^= RC[n + 1];
                }
            };
            if (COMMON_JS) {
                module2.exports = methods;
            } else {
                for(i = 0; i < methodNames.length; ++i){
                    root[methodNames[i]] = methods[methodNames[i]];
                }
                if (AMD) {
                    define(function() {
                        return methods;
                    });
                }
            }
        })();
    }
});
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
// src/testing-utils/contract-utils.ts
var import_ethers = require("ethers");
// ../../node_modules/@ethersproject/bignumber/lib.esm/bignumber.js
var import_bn = __toESM(require_bn());
// ../../node_modules/@ethersproject/logger/lib.esm/_version.js
var version = "logger/5.7.0";
// ../../node_modules/@ethersproject/logger/lib.esm/index.js
var _permanentCensorErrors = false;
var _censorErrors = false;
var LogLevels = {
    debug: 1,
    "default": 2,
    info: 2,
    warning: 3,
    error: 4,
    off: 5
};
var _logLevel = LogLevels["default"];
var _globalLogger = null;
function _checkNormalize() {
    try {
        var missing = [];
        [
            "NFD",
            "NFC",
            "NFKD",
            "NFKC"
        ].forEach(function(form) {
            try {
                if ("test".normalize(form) !== "test") {
                    throw new Error("bad normalize");
                }
                ;
            } catch (error) {
                missing.push(form);
            }
        });
        if (missing.length) {
            throw new Error("missing " + missing.join(", "));
        }
        if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) {
            throw new Error("broken implementation");
        }
    } catch (error) {
        return error.message;
    }
    return null;
}
var _normalizeError = _checkNormalize();
var LogLevel;
(function(LogLevel2) {
    LogLevel2["DEBUG"] = "DEBUG";
    LogLevel2["INFO"] = "INFO";
    LogLevel2["WARNING"] = "WARNING";
    LogLevel2["ERROR"] = "ERROR";
    LogLevel2["OFF"] = "OFF";
})(LogLevel || (LogLevel = {}));
var ErrorCode;
(function(ErrorCode2) {
    ErrorCode2["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
    ErrorCode2["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED";
    ErrorCode2["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION";
    ErrorCode2["NETWORK_ERROR"] = "NETWORK_ERROR";
    ErrorCode2["SERVER_ERROR"] = "SERVER_ERROR";
    ErrorCode2["TIMEOUT"] = "TIMEOUT";
    ErrorCode2["BUFFER_OVERRUN"] = "BUFFER_OVERRUN";
    ErrorCode2["NUMERIC_FAULT"] = "NUMERIC_FAULT";
    ErrorCode2["MISSING_NEW"] = "MISSING_NEW";
    ErrorCode2["INVALID_ARGUMENT"] = "INVALID_ARGUMENT";
    ErrorCode2["MISSING_ARGUMENT"] = "MISSING_ARGUMENT";
    ErrorCode2["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT";
    ErrorCode2["CALL_EXCEPTION"] = "CALL_EXCEPTION";
    ErrorCode2["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS";
    ErrorCode2["NONCE_EXPIRED"] = "NONCE_EXPIRED";
    ErrorCode2["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED";
    ErrorCode2["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT";
    ErrorCode2["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED";
    ErrorCode2["ACTION_REJECTED"] = "ACTION_REJECTED";
})(ErrorCode || (ErrorCode = {}));
var HEX = "0123456789abcdef";
var Logger = /*#__PURE__*/ function() {
    function Logger1(version8) {
        _classCallCheck(this, Logger1);
        Object.defineProperty(this, "version", {
            enumerable: true,
            value: version8,
            writable: false
        });
    }
    _createClass(Logger1, [
        {
            key: "_log",
            value: function _log(logLevel, args) {
                var level = logLevel.toLowerCase();
                if (LogLevels[level] == null) {
                    this.throwArgumentError("invalid log level name", "logLevel", logLevel);
                }
                if (_logLevel > LogLevels[level]) {
                    return;
                }
                console.log.apply(console, args);
            }
        },
        {
            key: "debug",
            value: function debug() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                this._log(Logger.levels.DEBUG, args);
            }
        },
        {
            key: "info",
            value: function info() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                this._log(Logger.levels.INFO, args);
            }
        },
        {
            key: "warn",
            value: function warn() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                this._log(Logger.levels.WARNING, args);
            }
        },
        {
            key: "makeError",
            value: function makeError(message, code, params) {
                if (_censorErrors) {
                    return this.makeError("censored error", code, {});
                }
                if (!code) {
                    code = Logger.errors.UNKNOWN_ERROR;
                }
                if (!params) {
                    params = {};
                }
                var messageDetails = [];
                Object.keys(params).forEach(function(key) {
                    var value = params[key];
                    try {
                        if (_instanceof(value, Uint8Array)) {
                            var hex = "";
                            for(var i = 0; i < value.length; i++){
                                hex += HEX[value[i] >> 4];
                                hex += HEX[value[i] & 15];
                            }
                            messageDetails.push(key + "=Uint8Array(0x" + hex + ")");
                        } else {
                            messageDetails.push(key + "=" + JSON.stringify(value));
                        }
                    } catch (error2) {
                        messageDetails.push(key + "=" + JSON.stringify(params[key].toString()));
                    }
                });
                messageDetails.push("code=".concat(code));
                messageDetails.push("version=".concat(this.version));
                var reason = message;
                var url = "";
                switch(code){
                    case ErrorCode.NUMERIC_FAULT:
                        {
                            url = "NUMERIC_FAULT";
                            var fault = message;
                            switch(fault){
                                case "overflow":
                                case "underflow":
                                case "division-by-zero":
                                    url += "-" + fault;
                                    break;
                                case "negative-power":
                                case "negative-width":
                                    url += "-unsupported";
                                    break;
                                case "unbound-bitwise-result":
                                    url += "-unbound-result";
                                    break;
                            }
                            break;
                        }
                    case ErrorCode.CALL_EXCEPTION:
                    case ErrorCode.INSUFFICIENT_FUNDS:
                    case ErrorCode.MISSING_NEW:
                    case ErrorCode.NONCE_EXPIRED:
                    case ErrorCode.REPLACEMENT_UNDERPRICED:
                    case ErrorCode.TRANSACTION_REPLACED:
                    case ErrorCode.UNPREDICTABLE_GAS_LIMIT:
                        url = code;
                        break;
                }
                if (url) {
                    message += " [ See: https://links.ethers.org/v5-errors-" + url + " ]";
                }
                if (messageDetails.length) {
                    message += " (" + messageDetails.join(", ") + ")";
                }
                var error = new Error(message);
                error.reason = reason;
                error.code = code;
                Object.keys(params).forEach(function(key) {
                    error[key] = params[key];
                });
                return error;
            }
        },
        {
            key: "throwError",
            value: function throwError(message, code, params) {
                throw this.makeError(message, code, params);
            }
        },
        {
            key: "throwArgumentError",
            value: function throwArgumentError(message, name, value) {
                return this.throwError(message, Logger.errors.INVALID_ARGUMENT, {
                    argument: name,
                    value: value
                });
            }
        },
        {
            key: "assert",
            value: function assert(condition, message, code, params) {
                if (!!condition) {
                    return;
                }
                this.throwError(message, code, params);
            }
        },
        {
            key: "assertArgument",
            value: function assertArgument(condition, message, name, value) {
                if (!!condition) {
                    return;
                }
                this.throwArgumentError(message, name, value);
            }
        },
        {
            key: "checkNormalize",
            value: function checkNormalize(message) {
                if (message == null) {
                    message = "platform missing String.prototype.normalize";
                }
                if (_normalizeError) {
                    this.throwError("platform missing String.prototype.normalize", Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: _normalizeError
                    });
                }
            }
        },
        {
            key: "checkSafeUint53",
            value: function checkSafeUint53(value, message) {
                if (typeof value !== "number") {
                    return;
                }
                if (message == null) {
                    message = "value not safe";
                }
                if (value < 0 || value >= 9007199254740991) {
                    this.throwError(message, Logger.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: value
                    });
                }
                if (value % 1) {
                    this.throwError(message, Logger.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: value
                    });
                }
            }
        },
        {
            key: "checkArgumentCount",
            value: function checkArgumentCount(count, expectedCount, message) {
                if (message) {
                    message = ": " + message;
                } else {
                    message = "";
                }
                if (count < expectedCount) {
                    this.throwError("missing argument" + message, Logger.errors.MISSING_ARGUMENT, {
                        count: count,
                        expectedCount: expectedCount
                    });
                }
                if (count > expectedCount) {
                    this.throwError("too many arguments" + message, Logger.errors.UNEXPECTED_ARGUMENT, {
                        count: count,
                        expectedCount: expectedCount
                    });
                }
            }
        },
        {
            key: "checkNew",
            value: function checkNew(target, kind) {
                if (target === Object || target == null) {
                    this.throwError("missing new", Logger.errors.MISSING_NEW, {
                        name: kind.name
                    });
                }
            }
        },
        {
            key: "checkAbstract",
            value: function checkAbstract(target, kind) {
                if (target === kind) {
                    this.throwError("cannot instantiate abstract class " + JSON.stringify(kind.name) + " directly; use a sub-class", Logger.errors.UNSUPPORTED_OPERATION, {
                        name: target.name,
                        operation: "new"
                    });
                } else if (target === Object || target == null) {
                    this.throwError("missing new", Logger.errors.MISSING_NEW, {
                        name: kind.name
                    });
                }
            }
        }
    ], [
        {
            key: "globalLogger",
            value: function globalLogger() {
                if (!_globalLogger) {
                    _globalLogger = new Logger(version);
                }
                return _globalLogger;
            }
        },
        {
            key: "setCensorship",
            value: function setCensorship(censorship, permanent) {
                if (!censorship && permanent) {
                    this.globalLogger().throwError("cannot permanently disable censorship", Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "setCensorship"
                    });
                }
                if (_permanentCensorErrors) {
                    if (!censorship) {
                        return;
                    }
                    this.globalLogger().throwError("error censorship permanent", Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "setCensorship"
                    });
                }
                _censorErrors = !!censorship;
                _permanentCensorErrors = !!permanent;
            }
        },
        {
            key: "setLogLevel",
            value: function setLogLevel(logLevel) {
                var level = LogLevels[logLevel.toLowerCase()];
                if (level == null) {
                    Logger.globalLogger().warn("invalid log level - " + logLevel);
                    return;
                }
                _logLevel = level;
            }
        },
        {
            key: "from",
            value: function from(version8) {
                return new Logger(version8);
            }
        }
    ]);
    return Logger1;
}();
Logger.errors = ErrorCode;
Logger.levels = LogLevel;
// ../../node_modules/@ethersproject/bytes/lib.esm/_version.js
var version2 = "bytes/5.7.0";
// ../../node_modules/@ethersproject/bytes/lib.esm/index.js
var logger = new Logger(version2);
function isHexable(value) {
    return !!value.toHexString;
}
function addSlice(array) {
    if (array.slice) {
        return array;
    }
    array.slice = function() {
        var args = Array.prototype.slice.call(arguments);
        return addSlice(new Uint8Array(Array.prototype.slice.apply(array, args)));
    };
    return array;
}
function isInteger(value) {
    return typeof value === "number" && value == value && value % 1 === 0;
}
function isBytes(value) {
    if (value == null) {
        return false;
    }
    if (value.constructor === Uint8Array) {
        return true;
    }
    if (typeof value === "string") {
        return false;
    }
    if (!isInteger(value.length) || value.length < 0) {
        return false;
    }
    for(var i = 0; i < value.length; i++){
        var v = value[i];
        if (!isInteger(v) || v < 0 || v >= 256) {
            return false;
        }
    }
    return true;
}
function arrayify(value, options) {
    if (!options) {
        options = {};
    }
    if (typeof value === "number") {
        logger.checkSafeUint53(value, "invalid arrayify value");
        var result = [];
        while(value){
            result.unshift(value & 255);
            value = parseInt(String(value / 256));
        }
        if (result.length === 0) {
            result.push(0);
        }
        return addSlice(new Uint8Array(result));
    }
    if (options.allowMissingPrefix && typeof value === "string" && value.substring(0, 2) !== "0x") {
        value = "0x" + value;
    }
    if (isHexable(value)) {
        value = value.toHexString();
    }
    if (isHexString(value)) {
        var hex = value.substring(2);
        if (hex.length % 2) {
            if (options.hexPad === "left") {
                hex = "0" + hex;
            } else if (options.hexPad === "right") {
                hex += "0";
            } else {
                logger.throwArgumentError("hex data is odd-length", "value", value);
            }
        }
        var result1 = [];
        for(var i = 0; i < hex.length; i += 2){
            result1.push(parseInt(hex.substring(i, i + 2), 16));
        }
        return addSlice(new Uint8Array(result1));
    }
    if (isBytes(value)) {
        return addSlice(new Uint8Array(value));
    }
    return logger.throwArgumentError("invalid arrayify value", "value", value);
}
function concat(items) {
    var objects = items.map(function(item) {
        return arrayify(item);
    });
    var length = objects.reduce(function(accum, item) {
        return accum + item.length;
    }, 0);
    var result = new Uint8Array(length);
    objects.reduce(function(offset, object) {
        result.set(object, offset);
        return offset + object.length;
    }, 0);
    return addSlice(result);
}
function isHexString(value, length) {
    if (typeof value !== "string" || !value.match(/^0x[0-9A-Fa-f]*$/)) {
        return false;
    }
    if (length && value.length !== 2 + 2 * length) {
        return false;
    }
    return true;
}
var HexCharacters = "0123456789abcdef";
function hexlify(value, options) {
    if (!options) {
        options = {};
    }
    if (typeof value === "number") {
        logger.checkSafeUint53(value, "invalid hexlify value");
        var hex = "";
        while(value){
            hex = HexCharacters[value & 15] + hex;
            value = Math.floor(value / 16);
        }
        if (hex.length) {
            if (hex.length % 2) {
                hex = "0" + hex;
            }
            return "0x" + hex;
        }
        return "0x00";
    }
    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "bigint") {
        value = value.toString(16);
        if (value.length % 2) {
            return "0x0" + value;
        }
        return "0x" + value;
    }
    if (options.allowMissingPrefix && typeof value === "string" && value.substring(0, 2) !== "0x") {
        value = "0x" + value;
    }
    if (isHexable(value)) {
        return value.toHexString();
    }
    if (isHexString(value)) {
        if (value.length % 2) {
            if (options.hexPad === "left") {
                value = "0x0" + value.substring(2);
            } else if (options.hexPad === "right") {
                value += "0";
            } else {
                logger.throwArgumentError("hex data is odd-length", "value", value);
            }
        }
        return value.toLowerCase();
    }
    if (isBytes(value)) {
        var result = "0x";
        for(var i = 0; i < value.length; i++){
            var v = value[i];
            result += HexCharacters[(v & 240) >> 4] + HexCharacters[v & 15];
        }
        return result;
    }
    return logger.throwArgumentError("invalid hexlify value", "value", value);
}
function hexDataSlice(data, offset, endOffset) {
    if (typeof data !== "string") {
        data = hexlify(data);
    } else if (!isHexString(data) || data.length % 2) {
        logger.throwArgumentError("invalid hexData", "value", data);
    }
    offset = 2 + 2 * offset;
    if (endOffset != null) {
        return "0x" + data.substring(offset, 2 + 2 * endOffset);
    }
    return "0x" + data.substring(offset);
}
function hexConcat(items) {
    var result = "0x";
    items.forEach(function(item) {
        result += hexlify(item).substring(2);
    });
    return result;
}
function hexZeroPad(value, length) {
    if (typeof value !== "string") {
        value = hexlify(value);
    } else if (!isHexString(value)) {
        logger.throwArgumentError("invalid hex string", "value", value);
    }
    if (value.length > 2 * length + 2) {
        logger.throwArgumentError("value out of range", "value", arguments[1]);
    }
    while(value.length < 2 * length + 2){
        value = "0x0" + value.substring(2);
    }
    return value;
}
// ../../node_modules/@ethersproject/bignumber/lib.esm/_version.js
var version3 = "bignumber/5.7.0";
// ../../node_modules/@ethersproject/bignumber/lib.esm/bignumber.js
var BN = import_bn.default.BN;
var logger2 = new Logger(version3);
var _constructorGuard = {};
var MAX_SAFE = 9007199254740991;
var _warnedToStringRadix = false;
var BigNumber = /*#__PURE__*/ function() {
    function BigNumber1(constructorGuard, hex) {
        _classCallCheck(this, BigNumber1);
        if (constructorGuard !== _constructorGuard) {
            logger2.throwError("cannot call constructor directly; use BigNumber.from", Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "new (BigNumber)"
            });
        }
        this._hex = hex;
        this._isBigNumber = true;
        Object.freeze(this);
    }
    _createClass(BigNumber1, [
        {
            key: "fromTwos",
            value: function fromTwos(value) {
                return toBigNumber(toBN(this).fromTwos(value));
            }
        },
        {
            key: "toTwos",
            value: function toTwos(value) {
                return toBigNumber(toBN(this).toTwos(value));
            }
        },
        {
            key: "abs",
            value: function abs() {
                if (this._hex[0] === "-") {
                    return BigNumber.from(this._hex.substring(1));
                }
                return this;
            }
        },
        {
            key: "add",
            value: function add(other) {
                return toBigNumber(toBN(this).add(toBN(other)));
            }
        },
        {
            key: "sub",
            value: function sub(other) {
                return toBigNumber(toBN(this).sub(toBN(other)));
            }
        },
        {
            key: "div",
            value: function div(other) {
                var o = BigNumber.from(other);
                if (o.isZero()) {
                    throwFault("division-by-zero", "div");
                }
                return toBigNumber(toBN(this).div(toBN(other)));
            }
        },
        {
            key: "mul",
            value: function mul(other) {
                return toBigNumber(toBN(this).mul(toBN(other)));
            }
        },
        {
            key: "mod",
            value: function mod(other) {
                var value = toBN(other);
                if (value.isNeg()) {
                    throwFault("division-by-zero", "mod");
                }
                return toBigNumber(toBN(this).umod(value));
            }
        },
        {
            key: "pow",
            value: function pow(other) {
                var value = toBN(other);
                if (value.isNeg()) {
                    throwFault("negative-power", "pow");
                }
                return toBigNumber(toBN(this).pow(value));
            }
        },
        {
            key: "and",
            value: function and(other) {
                var value = toBN(other);
                if (this.isNegative() || value.isNeg()) {
                    throwFault("unbound-bitwise-result", "and");
                }
                return toBigNumber(toBN(this).and(value));
            }
        },
        {
            key: "or",
            value: function or(other) {
                var value = toBN(other);
                if (this.isNegative() || value.isNeg()) {
                    throwFault("unbound-bitwise-result", "or");
                }
                return toBigNumber(toBN(this).or(value));
            }
        },
        {
            key: "xor",
            value: function xor(other) {
                var value = toBN(other);
                if (this.isNegative() || value.isNeg()) {
                    throwFault("unbound-bitwise-result", "xor");
                }
                return toBigNumber(toBN(this).xor(value));
            }
        },
        {
            key: "mask",
            value: function mask(value) {
                if (this.isNegative() || value < 0) {
                    throwFault("negative-width", "mask");
                }
                return toBigNumber(toBN(this).maskn(value));
            }
        },
        {
            key: "shl",
            value: function shl(value) {
                if (this.isNegative() || value < 0) {
                    throwFault("negative-width", "shl");
                }
                return toBigNumber(toBN(this).shln(value));
            }
        },
        {
            key: "shr",
            value: function shr(value) {
                if (this.isNegative() || value < 0) {
                    throwFault("negative-width", "shr");
                }
                return toBigNumber(toBN(this).shrn(value));
            }
        },
        {
            key: "eq",
            value: function eq(other) {
                return toBN(this).eq(toBN(other));
            }
        },
        {
            key: "lt",
            value: function lt(other) {
                return toBN(this).lt(toBN(other));
            }
        },
        {
            key: "lte",
            value: function lte(other) {
                return toBN(this).lte(toBN(other));
            }
        },
        {
            key: "gt",
            value: function gt(other) {
                return toBN(this).gt(toBN(other));
            }
        },
        {
            key: "gte",
            value: function gte(other) {
                return toBN(this).gte(toBN(other));
            }
        },
        {
            key: "isNegative",
            value: function isNegative() {
                return this._hex[0] === "-";
            }
        },
        {
            key: "isZero",
            value: function isZero() {
                return toBN(this).isZero();
            }
        },
        {
            key: "toNumber",
            value: function toNumber() {
                try {
                    return toBN(this).toNumber();
                } catch (error) {
                    throwFault("overflow", "toNumber", this.toString());
                }
                return null;
            }
        },
        {
            key: "toBigInt",
            value: function toBigInt() {
                try {
                    return BigInt(this.toString());
                } catch (e) {}
                return logger2.throwError("this platform does not support BigInt", Logger.errors.UNSUPPORTED_OPERATION, {
                    value: this.toString()
                });
            }
        },
        {
            key: "toString",
            value: function toString() {
                if (arguments.length > 0) {
                    if (arguments[0] === 10) {
                        if (!_warnedToStringRadix) {
                            _warnedToStringRadix = true;
                            logger2.warn("BigNumber.toString does not accept any parameters; base-10 is assumed");
                        }
                    } else if (arguments[0] === 16) {
                        logger2.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", Logger.errors.UNEXPECTED_ARGUMENT, {});
                    } else {
                        logger2.throwError("BigNumber.toString does not accept parameters", Logger.errors.UNEXPECTED_ARGUMENT, {});
                    }
                }
                return toBN(this).toString(10);
            }
        },
        {
            key: "toHexString",
            value: function toHexString() {
                return this._hex;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(key) {
                return {
                    type: "BigNumber",
                    hex: this.toHexString()
                };
            }
        }
    ], [
        {
            key: "from",
            value: function from(value) {
                if (_instanceof(value, BigNumber)) {
                    return value;
                }
                if (typeof value === "string") {
                    if (value.match(/^-?0x[0-9a-f]+$/i)) {
                        return new BigNumber(_constructorGuard, toHex(value));
                    }
                    if (value.match(/^-?[0-9]+$/)) {
                        return new BigNumber(_constructorGuard, toHex(new BN(value)));
                    }
                    return logger2.throwArgumentError("invalid BigNumber string", "value", value);
                }
                if (typeof value === "number") {
                    if (value % 1) {
                        throwFault("underflow", "BigNumber.from", value);
                    }
                    if (value >= MAX_SAFE || value <= -MAX_SAFE) {
                        throwFault("overflow", "BigNumber.from", value);
                    }
                    return BigNumber.from(String(value));
                }
                var anyValue = value;
                if ((typeof anyValue === "undefined" ? "undefined" : _typeof(anyValue)) === "bigint") {
                    return BigNumber.from(anyValue.toString());
                }
                if (isBytes(anyValue)) {
                    return BigNumber.from(hexlify(anyValue));
                }
                if (anyValue) {
                    if (anyValue.toHexString) {
                        var hex = anyValue.toHexString();
                        if (typeof hex === "string") {
                            return BigNumber.from(hex);
                        }
                    } else {
                        var hex1 = anyValue._hex;
                        if (hex1 == null && anyValue.type === "BigNumber") {
                            hex1 = anyValue.hex;
                        }
                        if (typeof hex1 === "string") {
                            if (isHexString(hex1) || hex1[0] === "-" && isHexString(hex1.substring(1))) {
                                return BigNumber.from(hex1);
                            }
                        }
                    }
                }
                return logger2.throwArgumentError("invalid BigNumber value", "value", value);
            }
        },
        {
            key: "isBigNumber",
            value: function isBigNumber(value) {
                return !!(value && value._isBigNumber);
            }
        }
    ]);
    return BigNumber1;
}();
function toHex(value) {
    if (typeof value !== "string") {
        return toHex(value.toString(16));
    }
    if (value[0] === "-") {
        value = value.substring(1);
        if (value[0] === "-") {
            logger2.throwArgumentError("invalid hex", "value", value);
        }
        value = toHex(value);
        if (value === "0x00") {
            return value;
        }
        return "-" + value;
    }
    if (value.substring(0, 2) !== "0x") {
        value = "0x" + value;
    }
    if (value === "0x") {
        return "0x00";
    }
    if (value.length % 2) {
        value = "0x0" + value.substring(2);
    }
    while(value.length > 4 && value.substring(0, 4) === "0x00"){
        value = "0x" + value.substring(4);
    }
    return value;
}
function toBigNumber(value) {
    return BigNumber.from(toHex(value));
}
function toBN(value) {
    var hex = BigNumber.from(value).toHexString();
    if (hex[0] === "-") {
        return new BN("-" + hex.substring(3), 16);
    }
    return new BN(hex.substring(2), 16);
}
function throwFault(fault, operation, value) {
    var params = {
        fault: fault,
        operation: operation
    };
    if (value != null) {
        params.value = value;
    }
    return logger2.throwError(fault, Logger.errors.NUMERIC_FAULT, params);
}
function _base36To16(value) {
    return new BN(value, 36).toString(16);
}
// ../../node_modules/@ethersproject/properties/lib.esm/_version.js
var version4 = "properties/5.7.0";
// ../../node_modules/@ethersproject/properties/lib.esm/index.js
var logger3 = new Logger(version4);
function defineReadOnly(object, name, value) {
    Object.defineProperty(object, name, {
        enumerable: true,
        value: value,
        writable: false
    });
}
function getStatic(ctor, key) {
    for(var i = 0; i < 32; i++){
        if (ctor[key]) {
            return ctor[key];
        }
        if (!ctor.prototype || typeof ctor.prototype !== "object") {
            break;
        }
        ctor = Object.getPrototypeOf(ctor.prototype).constructor;
    }
    return null;
}
var opaque = {
    bigint: true,
    boolean: true,
    "function": true,
    number: true,
    string: true
};
function _isFrozen(object) {
    if (object === void 0 || object === null || opaque[typeof object === "undefined" ? "undefined" : _typeof(object)]) {
        return true;
    }
    if (Array.isArray(object) || typeof object === "object") {
        if (!Object.isFrozen(object)) {
            return false;
        }
        var keys = Object.keys(object);
        for(var i = 0; i < keys.length; i++){
            var value = null;
            try {
                value = object[keys[i]];
            } catch (error) {
                continue;
            }
            if (!_isFrozen(value)) {
                return false;
            }
        }
        return true;
    }
    return logger3.throwArgumentError("Cannot deepCopy ".concat(typeof object === "undefined" ? "undefined" : _typeof(object)), "object", object);
}
function _deepCopy(object) {
    if (_isFrozen(object)) {
        return object;
    }
    if (Array.isArray(object)) {
        return Object.freeze(object.map(function(item) {
            return deepCopy(item);
        }));
    }
    if (typeof object === "object") {
        var result = {};
        for(var key in object){
            var value = object[key];
            if (value === void 0) {
                continue;
            }
            defineReadOnly(result, key, deepCopy(value));
        }
        return result;
    }
    return logger3.throwArgumentError("Cannot deepCopy ".concat(typeof object === "undefined" ? "undefined" : _typeof(object)), "object", object);
}
function deepCopy(object) {
    return _deepCopy(object);
}
var Description = function Description(info) {
    _classCallCheck(this, Description);
    for(var key in info){
        this[key] = deepCopy(info[key]);
    }
};
// ../../node_modules/@ethersproject/abi/lib.esm/_version.js
var version5 = "abi/5.7.0";
// ../../node_modules/@ethersproject/abi/lib.esm/fragments.js
var logger4 = new Logger(version5);
var _constructorGuard2 = {};
var ModifiersBytes = {
    calldata: true,
    memory: true,
    storage: true
};
var ModifiersNest = {
    calldata: true,
    memory: true
};
function checkModifier(type, name) {
    if (type === "bytes" || type === "string") {
        if (ModifiersBytes[name]) {
            return true;
        }
    } else if (type === "address") {
        if (name === "payable") {
            return true;
        }
    } else if (type.indexOf("[") >= 0 || type === "tuple") {
        if (ModifiersNest[name]) {
            return true;
        }
    }
    if (ModifiersBytes[name] || name === "payable") {
        logger4.throwArgumentError("invalid modifier", "name", name);
    }
    return false;
}
function parseParamType(param, allowIndexed) {
    var throwError = function throwError(i) {
        logger4.throwArgumentError("unexpected character at position ".concat(i), "param", param);
    };
    var newNode = function newNode(parent2) {
        var node2 = {
            type: "",
            name: "",
            parent: parent2,
            state: {
                allowType: true
            }
        };
        if (allowIndexed) {
            node2.indexed = false;
        }
        return node2;
    };
    var originalParam = param;
    param = param.replace(/\s/g, " ");
    var parent = {
        type: "",
        name: "",
        state: {
            allowType: true
        }
    };
    var node = parent;
    for(var i = 0; i < param.length; i++){
        var c = param[i];
        switch(c){
            case "(":
                if (node.state.allowType && node.type === "") {
                    node.type = "tuple";
                } else if (!node.state.allowParams) {
                    throwError(i);
                }
                node.state.allowType = false;
                node.type = verifyType(node.type);
                node.components = [
                    newNode(node)
                ];
                node = node.components[0];
                break;
            case ")":
                delete node.state;
                if (node.name === "indexed") {
                    if (!allowIndexed) {
                        throwError(i);
                    }
                    node.indexed = true;
                    node.name = "";
                }
                if (checkModifier(node.type, node.name)) {
                    node.name = "";
                }
                node.type = verifyType(node.type);
                var child = node;
                node = node.parent;
                if (!node) {
                    throwError(i);
                }
                delete child.parent;
                node.state.allowParams = false;
                node.state.allowName = true;
                node.state.allowArray = true;
                break;
            case ",":
                delete node.state;
                if (node.name === "indexed") {
                    if (!allowIndexed) {
                        throwError(i);
                    }
                    node.indexed = true;
                    node.name = "";
                }
                if (checkModifier(node.type, node.name)) {
                    node.name = "";
                }
                node.type = verifyType(node.type);
                var sibling = newNode(node.parent);
                node.parent.components.push(sibling);
                delete node.parent;
                node = sibling;
                break;
            case " ":
                if (node.state.allowType) {
                    if (node.type !== "") {
                        node.type = verifyType(node.type);
                        delete node.state.allowType;
                        node.state.allowName = true;
                        node.state.allowParams = true;
                    }
                }
                if (node.state.allowName) {
                    if (node.name !== "") {
                        if (node.name === "indexed") {
                            if (!allowIndexed) {
                                throwError(i);
                            }
                            if (node.indexed) {
                                throwError(i);
                            }
                            node.indexed = true;
                            node.name = "";
                        } else if (checkModifier(node.type, node.name)) {
                            node.name = "";
                        } else {
                            node.state.allowName = false;
                        }
                    }
                }
                break;
            case "[":
                if (!node.state.allowArray) {
                    throwError(i);
                }
                node.type += c;
                node.state.allowArray = false;
                node.state.allowName = false;
                node.state.readArray = true;
                break;
            case "]":
                if (!node.state.readArray) {
                    throwError(i);
                }
                node.type += c;
                node.state.readArray = false;
                node.state.allowArray = true;
                node.state.allowName = true;
                break;
            default:
                if (node.state.allowType) {
                    node.type += c;
                    node.state.allowParams = true;
                    node.state.allowArray = true;
                } else if (node.state.allowName) {
                    node.name += c;
                    delete node.state.allowArray;
                } else if (node.state.readArray) {
                    node.type += c;
                } else {
                    throwError(i);
                }
        }
    }
    if (node.parent) {
        logger4.throwArgumentError("unexpected eof", "param", param);
    }
    delete parent.state;
    if (node.name === "indexed") {
        if (!allowIndexed) {
            throwError(originalParam.length - 7);
        }
        if (node.indexed) {
            throwError(originalParam.length - 7);
        }
        node.indexed = true;
        node.name = "";
    } else if (checkModifier(node.type, node.name)) {
        node.name = "";
    }
    parent.type = verifyType(parent.type);
    return parent;
}
function populate(object, params) {
    for(var key in params){
        defineReadOnly(object, key, params[key]);
    }
}
var FormatTypes = Object.freeze({
    // Bare formatting, as is needed for computing a sighash of an event or function
    sighash: "sighash",
    // Human-Readable with Minimal spacing and without names (compact human-readable)
    minimal: "minimal",
    // Human-Readable with nice spacing, including all names
    full: "full",
    // JSON-format a la Solidity
    json: "json"
});
var paramTypeArray = new RegExp(/^(.*)\[([0-9]*)\]$/);
var ParamType = /*#__PURE__*/ function() {
    function ParamType1(constructorGuard, params) {
        _classCallCheck(this, ParamType1);
        if (constructorGuard !== _constructorGuard2) {
            logger4.throwError("use fromString", Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "new ParamType()"
            });
        }
        populate(this, params);
        var match = this.type.match(paramTypeArray);
        if (match) {
            populate(this, {
                arrayLength: parseInt(match[2] || "-1"),
                arrayChildren: ParamType.fromObject({
                    type: match[1],
                    components: this.components
                }),
                baseType: "array"
            });
        } else {
            populate(this, {
                arrayLength: null,
                arrayChildren: null,
                baseType: this.components != null ? "tuple" : this.type
            });
        }
        this._isParamType = true;
        Object.freeze(this);
    }
    _createClass(ParamType1, [
        {
            // Format the parameter fragment
            //   - sighash: "(uint256,address)"
            //   - minimal: "tuple(uint256,address) indexed"
            //   - full:    "tuple(uint256 foo, address bar) indexed baz"
            key: "format",
            value: function format(format) {
                if (!format) {
                    format = FormatTypes.sighash;
                }
                if (!FormatTypes[format]) {
                    logger4.throwArgumentError("invalid format type", "format", format);
                }
                if (format === FormatTypes.json) {
                    var result2 = {
                        type: this.baseType === "tuple" ? "tuple" : this.type,
                        name: this.name || void 0
                    };
                    if (typeof this.indexed === "boolean") {
                        result2.indexed = this.indexed;
                    }
                    if (this.components) {
                        result2.components = this.components.map(function(comp) {
                            return JSON.parse(comp.format(format));
                        });
                    }
                    return JSON.stringify(result2);
                }
                var result = "";
                if (this.baseType === "array") {
                    result += this.arrayChildren.format(format);
                    result += "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]";
                } else {
                    if (this.baseType === "tuple") {
                        if (format !== FormatTypes.sighash) {
                            result += this.type;
                        }
                        result += "(" + this.components.map(function(comp) {
                            return comp.format(format);
                        }).join(format === FormatTypes.full ? ", " : ",") + ")";
                    } else {
                        result += this.type;
                    }
                }
                if (format !== FormatTypes.sighash) {
                    if (this.indexed === true) {
                        result += " indexed";
                    }
                    if (format === FormatTypes.full && this.name) {
                        result += " " + this.name;
                    }
                }
                return result;
            }
        }
    ], [
        {
            key: "from",
            value: function from(value, allowIndexed) {
                if (typeof value === "string") {
                    return ParamType.fromString(value, allowIndexed);
                }
                return ParamType.fromObject(value);
            }
        },
        {
            key: "fromObject",
            value: function fromObject(value) {
                if (ParamType.isParamType(value)) {
                    return value;
                }
                return new ParamType(_constructorGuard2, {
                    name: value.name || null,
                    type: verifyType(value.type),
                    indexed: value.indexed == null ? null : !!value.indexed,
                    components: value.components ? value.components.map(ParamType.fromObject) : null
                });
            }
        },
        {
            key: "fromString",
            value: function fromString(value, allowIndexed) {
                var ParamTypify = function ParamTypify(node) {
                    return ParamType.fromObject({
                        name: node.name,
                        type: node.type,
                        indexed: node.indexed,
                        components: node.components
                    });
                };
                return ParamTypify(parseParamType(value, !!allowIndexed));
            }
        },
        {
            key: "isParamType",
            value: function isParamType(value) {
                return !!(value != null && value._isParamType);
            }
        }
    ]);
    return ParamType1;
}();
function parseParams(value, allowIndex) {
    return splitNesting(value).map(function(param) {
        return ParamType.fromString(param, allowIndex);
    });
}
var Fragment = /*#__PURE__*/ function() {
    function Fragment1(constructorGuard, params) {
        _classCallCheck(this, Fragment1);
        if (constructorGuard !== _constructorGuard2) {
            logger4.throwError("use a static from method", Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "new Fragment()"
            });
        }
        populate(this, params);
        this._isFragment = true;
        Object.freeze(this);
    }
    _createClass(Fragment1, null, [
        {
            key: "from",
            value: function from(value) {
                if (Fragment.isFragment(value)) {
                    return value;
                }
                if (typeof value === "string") {
                    return Fragment.fromString(value);
                }
                return Fragment.fromObject(value);
            }
        },
        {
            key: "fromObject",
            value: function fromObject(value) {
                if (Fragment.isFragment(value)) {
                    return value;
                }
                switch(value.type){
                    case "function":
                        return FunctionFragment.fromObject(value);
                    case "event":
                        return EventFragment.fromObject(value);
                    case "constructor":
                        return ConstructorFragment.fromObject(value);
                    case "error":
                        return ErrorFragment.fromObject(value);
                    case "fallback":
                    case "receive":
                        return null;
                }
                return logger4.throwArgumentError("invalid fragment object", "value", value);
            }
        },
        {
            key: "fromString",
            value: function fromString(value) {
                value = value.replace(/\s/g, " ");
                value = value.replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " ");
                value = value.trim();
                if (value.split(" ")[0] === "event") {
                    return EventFragment.fromString(value.substring(5).trim());
                } else if (value.split(" ")[0] === "function") {
                    return FunctionFragment.fromString(value.substring(8).trim());
                } else if (value.split("(")[0].trim() === "constructor") {
                    return ConstructorFragment.fromString(value.trim());
                } else if (value.split(" ")[0] === "error") {
                    return ErrorFragment.fromString(value.substring(5).trim());
                }
                return logger4.throwArgumentError("unsupported fragment", "value", value);
            }
        },
        {
            key: "isFragment",
            value: function isFragment(value) {
                return !!(value && value._isFragment);
            }
        }
    ]);
    return Fragment1;
}();
var EventFragment = /*#__PURE__*/ function(Fragment) {
    _inherits(EventFragment1, Fragment);
    var _super = _createSuper(EventFragment1);
    function EventFragment1() {
        _classCallCheck(this, EventFragment1);
        return _super.apply(this, arguments);
    }
    _createClass(EventFragment1, [
        {
            key: "format",
            value: function format(format) {
                if (!format) {
                    format = FormatTypes.sighash;
                }
                if (!FormatTypes[format]) {
                    logger4.throwArgumentError("invalid format type", "format", format);
                }
                if (format === FormatTypes.json) {
                    return JSON.stringify({
                        type: "event",
                        anonymous: this.anonymous,
                        name: this.name,
                        inputs: this.inputs.map(function(input) {
                            return JSON.parse(input.format(format));
                        })
                    });
                }
                var result = "";
                if (format !== FormatTypes.sighash) {
                    result += "event ";
                }
                result += this.name + "(" + this.inputs.map(function(input) {
                    return input.format(format);
                }).join(format === FormatTypes.full ? ", " : ",") + ") ";
                if (format !== FormatTypes.sighash) {
                    if (this.anonymous) {
                        result += "anonymous ";
                    }
                }
                return result.trim();
            }
        }
    ], [
        {
            key: "from",
            value: function from(value) {
                if (typeof value === "string") {
                    return EventFragment.fromString(value);
                }
                return EventFragment.fromObject(value);
            }
        },
        {
            key: "fromObject",
            value: function fromObject(value) {
                if (EventFragment.isEventFragment(value)) {
                    return value;
                }
                if (value.type !== "event") {
                    logger4.throwArgumentError("invalid event object", "value", value);
                }
                var params = {
                    name: verifyIdentifier(value.name),
                    anonymous: value.anonymous,
                    inputs: value.inputs ? value.inputs.map(ParamType.fromObject) : [],
                    type: "event"
                };
                return new EventFragment(_constructorGuard2, params);
            }
        },
        {
            key: "fromString",
            value: function fromString(value) {
                var match = value.match(regexParen);
                if (!match) {
                    logger4.throwArgumentError("invalid event string", "value", value);
                }
                var anonymous = false;
                match[3].split(" ").forEach(function(modifier) {
                    switch(modifier.trim()){
                        case "anonymous":
                            anonymous = true;
                            break;
                        case "":
                            break;
                        default:
                            logger4.warn("unknown modifier: " + modifier);
                    }
                });
                return EventFragment.fromObject({
                    name: match[1].trim(),
                    anonymous: anonymous,
                    inputs: parseParams(match[2], true),
                    type: "event"
                });
            }
        },
        {
            key: "isEventFragment",
            value: function isEventFragment(value) {
                return value && value._isFragment && value.type === "event";
            }
        }
    ]);
    return EventFragment1;
}(Fragment);
function parseGas(value, params) {
    params.gas = null;
    var comps = value.split("@");
    if (comps.length !== 1) {
        if (comps.length > 2) {
            logger4.throwArgumentError("invalid human-readable ABI signature", "value", value);
        }
        if (!comps[1].match(/^[0-9]+$/)) {
            logger4.throwArgumentError("invalid human-readable ABI signature gas", "value", value);
        }
        params.gas = BigNumber.from(comps[1]);
        return comps[0];
    }
    return value;
}
function parseModifiers(value, params) {
    params.constant = false;
    params.payable = false;
    params.stateMutability = "nonpayable";
    value.split(" ").forEach(function(modifier) {
        switch(modifier.trim()){
            case "constant":
                params.constant = true;
                break;
            case "payable":
                params.payable = true;
                params.stateMutability = "payable";
                break;
            case "nonpayable":
                params.payable = false;
                params.stateMutability = "nonpayable";
                break;
            case "pure":
                params.constant = true;
                params.stateMutability = "pure";
                break;
            case "view":
                params.constant = true;
                params.stateMutability = "view";
                break;
            case "external":
            case "public":
            case "":
                break;
            default:
                console.log("unknown modifier: " + modifier);
        }
    });
}
function verifyState(value) {
    var result = {
        constant: false,
        payable: true,
        stateMutability: "payable"
    };
    if (value.stateMutability != null) {
        result.stateMutability = value.stateMutability;
        result.constant = result.stateMutability === "view" || result.stateMutability === "pure";
        if (value.constant != null) {
            if (!!value.constant !== result.constant) {
                logger4.throwArgumentError("cannot have constant function with mutability " + result.stateMutability, "value", value);
            }
        }
        result.payable = result.stateMutability === "payable";
        if (value.payable != null) {
            if (!!value.payable !== result.payable) {
                logger4.throwArgumentError("cannot have payable function with mutability " + result.stateMutability, "value", value);
            }
        }
    } else if (value.payable != null) {
        result.payable = !!value.payable;
        if (value.constant == null && !result.payable && value.type !== "constructor") {
            logger4.throwArgumentError("unable to determine stateMutability", "value", value);
        }
        result.constant = !!value.constant;
        if (result.constant) {
            result.stateMutability = "view";
        } else {
            result.stateMutability = result.payable ? "payable" : "nonpayable";
        }
        if (result.payable && result.constant) {
            logger4.throwArgumentError("cannot have constant payable function", "value", value);
        }
    } else if (value.constant != null) {
        result.constant = !!value.constant;
        result.payable = !result.constant;
        result.stateMutability = result.constant ? "view" : "payable";
    } else if (value.type !== "constructor") {
        logger4.throwArgumentError("unable to determine stateMutability", "value", value);
    }
    return result;
}
var ConstructorFragment = /*#__PURE__*/ function(Fragment) {
    _inherits(ConstructorFragment1, Fragment);
    var _super = _createSuper(ConstructorFragment1);
    function ConstructorFragment1() {
        _classCallCheck(this, ConstructorFragment1);
        return _super.apply(this, arguments);
    }
    _createClass(ConstructorFragment1, [
        {
            key: "format",
            value: function format(format) {
                if (!format) {
                    format = FormatTypes.sighash;
                }
                if (!FormatTypes[format]) {
                    logger4.throwArgumentError("invalid format type", "format", format);
                }
                if (format === FormatTypes.json) {
                    return JSON.stringify({
                        type: "constructor",
                        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
                        payable: this.payable,
                        gas: this.gas ? this.gas.toNumber() : void 0,
                        inputs: this.inputs.map(function(input) {
                            return JSON.parse(input.format(format));
                        })
                    });
                }
                if (format === FormatTypes.sighash) {
                    logger4.throwError("cannot format a constructor for sighash", Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "format(sighash)"
                    });
                }
                var result = "constructor(" + this.inputs.map(function(input) {
                    return input.format(format);
                }).join(format === FormatTypes.full ? ", " : ",") + ") ";
                if (this.stateMutability && this.stateMutability !== "nonpayable") {
                    result += this.stateMutability + " ";
                }
                return result.trim();
            }
        }
    ], [
        {
            key: "from",
            value: function from(value) {
                if (typeof value === "string") {
                    return ConstructorFragment.fromString(value);
                }
                return ConstructorFragment.fromObject(value);
            }
        },
        {
            key: "fromObject",
            value: function fromObject(value) {
                if (ConstructorFragment.isConstructorFragment(value)) {
                    return value;
                }
                if (value.type !== "constructor") {
                    logger4.throwArgumentError("invalid constructor object", "value", value);
                }
                var state = verifyState(value);
                if (state.constant) {
                    logger4.throwArgumentError("constructor cannot be constant", "value", value);
                }
                var params = {
                    name: null,
                    type: value.type,
                    inputs: value.inputs ? value.inputs.map(ParamType.fromObject) : [],
                    payable: state.payable,
                    stateMutability: state.stateMutability,
                    gas: value.gas ? BigNumber.from(value.gas) : null
                };
                return new ConstructorFragment(_constructorGuard2, params);
            }
        },
        {
            key: "fromString",
            value: function fromString(value) {
                var params = {
                    type: "constructor"
                };
                value = parseGas(value, params);
                var parens = value.match(regexParen);
                if (!parens || parens[1].trim() !== "constructor") {
                    logger4.throwArgumentError("invalid constructor string", "value", value);
                }
                params.inputs = parseParams(parens[2].trim(), false);
                parseModifiers(parens[3].trim(), params);
                return ConstructorFragment.fromObject(params);
            }
        },
        {
            key: "isConstructorFragment",
            value: function isConstructorFragment(value) {
                return value && value._isFragment && value.type === "constructor";
            }
        }
    ]);
    return ConstructorFragment1;
}(Fragment);
var FunctionFragment = /*#__PURE__*/ function(ConstructorFragment) {
    _inherits(FunctionFragment1, ConstructorFragment);
    var _super = _createSuper(FunctionFragment1);
    function FunctionFragment1() {
        _classCallCheck(this, FunctionFragment1);
        return _super.apply(this, arguments);
    }
    _createClass(FunctionFragment1, [
        {
            key: "format",
            value: function format(format) {
                if (!format) {
                    format = FormatTypes.sighash;
                }
                if (!FormatTypes[format]) {
                    logger4.throwArgumentError("invalid format type", "format", format);
                }
                if (format === FormatTypes.json) {
                    return JSON.stringify({
                        type: "function",
                        name: this.name,
                        constant: this.constant,
                        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
                        payable: this.payable,
                        gas: this.gas ? this.gas.toNumber() : void 0,
                        inputs: this.inputs.map(function(input) {
                            return JSON.parse(input.format(format));
                        }),
                        outputs: this.outputs.map(function(output) {
                            return JSON.parse(output.format(format));
                        })
                    });
                }
                var result = "";
                if (format !== FormatTypes.sighash) {
                    result += "function ";
                }
                result += this.name + "(" + this.inputs.map(function(input) {
                    return input.format(format);
                }).join(format === FormatTypes.full ? ", " : ",") + ") ";
                if (format !== FormatTypes.sighash) {
                    if (this.stateMutability) {
                        if (this.stateMutability !== "nonpayable") {
                            result += this.stateMutability + " ";
                        }
                    } else if (this.constant) {
                        result += "view ";
                    }
                    if (this.outputs && this.outputs.length) {
                        result += "returns (" + this.outputs.map(function(output) {
                            return output.format(format);
                        }).join(", ") + ") ";
                    }
                    if (this.gas != null) {
                        result += "@" + this.gas.toString() + " ";
                    }
                }
                return result.trim();
            }
        }
    ], [
        {
            key: "from",
            value: function from(value) {
                if (typeof value === "string") {
                    return FunctionFragment.fromString(value);
                }
                return FunctionFragment.fromObject(value);
            }
        },
        {
            key: "fromObject",
            value: function fromObject(value) {
                if (FunctionFragment.isFunctionFragment(value)) {
                    return value;
                }
                if (value.type !== "function") {
                    logger4.throwArgumentError("invalid function object", "value", value);
                }
                var state = verifyState(value);
                var params = {
                    type: value.type,
                    name: verifyIdentifier(value.name),
                    constant: state.constant,
                    inputs: value.inputs ? value.inputs.map(ParamType.fromObject) : [],
                    outputs: value.outputs ? value.outputs.map(ParamType.fromObject) : [],
                    payable: state.payable,
                    stateMutability: state.stateMutability,
                    gas: value.gas ? BigNumber.from(value.gas) : null
                };
                return new FunctionFragment(_constructorGuard2, params);
            }
        },
        {
            key: "fromString",
            value: function fromString(value) {
                var params = {
                    type: "function"
                };
                value = parseGas(value, params);
                var comps = value.split(" returns ");
                if (comps.length > 2) {
                    logger4.throwArgumentError("invalid function string", "value", value);
                }
                var parens = comps[0].match(regexParen);
                if (!parens) {
                    logger4.throwArgumentError("invalid function signature", "value", value);
                }
                params.name = parens[1].trim();
                if (params.name) {
                    verifyIdentifier(params.name);
                }
                params.inputs = parseParams(parens[2], false);
                parseModifiers(parens[3].trim(), params);
                if (comps.length > 1) {
                    var returns = comps[1].match(regexParen);
                    if (returns[1].trim() != "" || returns[3].trim() != "") {
                        logger4.throwArgumentError("unexpected tokens", "value", value);
                    }
                    params.outputs = parseParams(returns[2], false);
                } else {
                    params.outputs = [];
                }
                return FunctionFragment.fromObject(params);
            }
        },
        {
            key: "isFunctionFragment",
            value: function isFunctionFragment(value) {
                return value && value._isFragment && value.type === "function";
            }
        }
    ]);
    return FunctionFragment1;
}(ConstructorFragment);
function checkForbidden(fragment) {
    var sig = fragment.format();
    if (sig === "Error(string)" || sig === "Panic(uint256)") {
        logger4.throwArgumentError("cannot specify user defined ".concat(sig, " error"), "fragment", fragment);
    }
    return fragment;
}
var ErrorFragment = /*#__PURE__*/ function(Fragment) {
    _inherits(ErrorFragment1, Fragment);
    var _super = _createSuper(ErrorFragment1);
    function ErrorFragment1() {
        _classCallCheck(this, ErrorFragment1);
        return _super.apply(this, arguments);
    }
    _createClass(ErrorFragment1, [
        {
            key: "format",
            value: function format(format) {
                if (!format) {
                    format = FormatTypes.sighash;
                }
                if (!FormatTypes[format]) {
                    logger4.throwArgumentError("invalid format type", "format", format);
                }
                if (format === FormatTypes.json) {
                    return JSON.stringify({
                        type: "error",
                        name: this.name,
                        inputs: this.inputs.map(function(input) {
                            return JSON.parse(input.format(format));
                        })
                    });
                }
                var result = "";
                if (format !== FormatTypes.sighash) {
                    result += "error ";
                }
                result += this.name + "(" + this.inputs.map(function(input) {
                    return input.format(format);
                }).join(format === FormatTypes.full ? ", " : ",") + ") ";
                return result.trim();
            }
        }
    ], [
        {
            key: "from",
            value: function from(value) {
                if (typeof value === "string") {
                    return ErrorFragment.fromString(value);
                }
                return ErrorFragment.fromObject(value);
            }
        },
        {
            key: "fromObject",
            value: function fromObject(value) {
                if (ErrorFragment.isErrorFragment(value)) {
                    return value;
                }
                if (value.type !== "error") {
                    logger4.throwArgumentError("invalid error object", "value", value);
                }
                var params = {
                    type: value.type,
                    name: verifyIdentifier(value.name),
                    inputs: value.inputs ? value.inputs.map(ParamType.fromObject) : []
                };
                return checkForbidden(new ErrorFragment(_constructorGuard2, params));
            }
        },
        {
            key: "fromString",
            value: function fromString(value) {
                var params = {
                    type: "error"
                };
                var parens = value.match(regexParen);
                if (!parens) {
                    logger4.throwArgumentError("invalid error signature", "value", value);
                }
                params.name = parens[1].trim();
                if (params.name) {
                    verifyIdentifier(params.name);
                }
                params.inputs = parseParams(parens[2], false);
                return checkForbidden(ErrorFragment.fromObject(params));
            }
        },
        {
            key: "isErrorFragment",
            value: function isErrorFragment(value) {
                return value && value._isFragment && value.type === "error";
            }
        }
    ]);
    return ErrorFragment1;
}(Fragment);
function verifyType(type) {
    if (type.match(/^uint($|[^1-9])/)) {
        type = "uint256" + type.substring(4);
    } else if (type.match(/^int($|[^1-9])/)) {
        type = "int256" + type.substring(3);
    }
    return type;
}
var regexIdentifier = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");
function verifyIdentifier(value) {
    if (!value || !value.match(regexIdentifier)) {
        logger4.throwArgumentError('invalid identifier "'.concat(value, '"'), "value", value);
    }
    return value;
}
var regexParen = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
function splitNesting(value) {
    value = value.trim();
    var result = [];
    var accum = "";
    var depth = 0;
    for(var offset = 0; offset < value.length; offset++){
        var c = value[offset];
        if (c === "," && depth === 0) {
            result.push(accum);
            accum = "";
        } else {
            accum += c;
            if (c === "(") {
                depth++;
            } else if (c === ")") {
                depth--;
                if (depth === -1) {
                    logger4.throwArgumentError("unbalanced parenthesis", "value", value);
                }
            }
        }
    }
    if (accum) {
        result.push(accum);
    }
    return result;
}
// ../../node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js
var logger5 = new Logger(version5);
var Coder = /*#__PURE__*/ function() {
    function Coder(name, type, localName, dynamic) {
        _classCallCheck(this, Coder);
        this.name = name;
        this.type = type;
        this.localName = localName;
        this.dynamic = dynamic;
    }
    _createClass(Coder, [
        {
            key: "_throwError",
            value: function _throwError(message, value) {
                logger5.throwArgumentError(message, this.localName, value);
            }
        }
    ]);
    return Coder;
}();
var Writer = /*#__PURE__*/ function() {
    function Writer(wordSize) {
        _classCallCheck(this, Writer);
        defineReadOnly(this, "wordSize", wordSize || 32);
        this._data = [];
        this._dataLength = 0;
        this._padding = new Uint8Array(wordSize);
    }
    _createClass(Writer, [
        {
            key: "data",
            get: function get() {
                return hexConcat(this._data);
            }
        },
        {
            key: "length",
            get: function get() {
                return this._dataLength;
            }
        },
        {
            key: "_writeData",
            value: function _writeData(data) {
                this._data.push(data);
                this._dataLength += data.length;
                return data.length;
            }
        },
        {
            key: "appendWriter",
            value: function appendWriter(writer) {
                return this._writeData(concat(writer._data));
            }
        },
        {
            // Arrayish items; padded on the right to wordSize
            key: "writeBytes",
            value: function writeBytes(value) {
                var bytes = arrayify(value);
                var paddingOffset = bytes.length % this.wordSize;
                if (paddingOffset) {
                    bytes = concat([
                        bytes,
                        this._padding.slice(paddingOffset)
                    ]);
                }
                return this._writeData(bytes);
            }
        },
        {
            key: "_getValue",
            value: function _getValue(value) {
                var bytes = arrayify(BigNumber.from(value));
                if (bytes.length > this.wordSize) {
                    logger5.throwError("value out-of-bounds", Logger.errors.BUFFER_OVERRUN, {
                        length: this.wordSize,
                        offset: bytes.length
                    });
                }
                if (bytes.length % this.wordSize) {
                    bytes = concat([
                        this._padding.slice(bytes.length % this.wordSize),
                        bytes
                    ]);
                }
                return bytes;
            }
        },
        {
            // BigNumberish items; padded on the left to wordSize
            key: "writeValue",
            value: function writeValue(value) {
                return this._writeData(this._getValue(value));
            }
        },
        {
            key: "writeUpdatableValue",
            value: function writeUpdatableValue() {
                var _this = this;
                var offset = this._data.length;
                this._data.push(this._padding);
                this._dataLength += this.wordSize;
                return function(value) {
                    _this._data[offset] = _this._getValue(value);
                };
            }
        }
    ]);
    return Writer;
}();
var Reader = /*#__PURE__*/ function() {
    function Reader1(data, wordSize, coerceFunc, allowLoose) {
        _classCallCheck(this, Reader1);
        defineReadOnly(this, "_data", arrayify(data));
        defineReadOnly(this, "wordSize", wordSize || 32);
        defineReadOnly(this, "_coerceFunc", coerceFunc);
        defineReadOnly(this, "allowLoose", allowLoose);
        this._offset = 0;
    }
    _createClass(Reader1, [
        {
            key: "data",
            get: function get() {
                return hexlify(this._data);
            }
        },
        {
            key: "consumed",
            get: function get() {
                return this._offset;
            }
        },
        {
            key: "coerce",
            value: function coerce(name, value) {
                if (this._coerceFunc) {
                    return this._coerceFunc(name, value);
                }
                return Reader.coerce(name, value);
            }
        },
        {
            key: "_peekBytes",
            value: function _peekBytes(offset, length, loose) {
                var alignedLength = Math.ceil(length / this.wordSize) * this.wordSize;
                if (this._offset + alignedLength > this._data.length) {
                    if (this.allowLoose && loose && this._offset + length <= this._data.length) {
                        alignedLength = length;
                    } else {
                        logger5.throwError("data out-of-bounds", Logger.errors.BUFFER_OVERRUN, {
                            length: this._data.length,
                            offset: this._offset + alignedLength
                        });
                    }
                }
                return this._data.slice(this._offset, this._offset + alignedLength);
            }
        },
        {
            key: "subReader",
            value: function subReader(offset) {
                return new Reader(this._data.slice(this._offset + offset), this.wordSize, this._coerceFunc, this.allowLoose);
            }
        },
        {
            key: "readBytes",
            value: function readBytes(length, loose) {
                var bytes = this._peekBytes(0, length, !!loose);
                this._offset += bytes.length;
                return bytes.slice(0, length);
            }
        },
        {
            key: "readValue",
            value: function readValue() {
                return BigNumber.from(this.readBytes(this.wordSize));
            }
        }
    ], [
        {
            key: "coerce",
            value: // The default Coerce function
            function coerce(name, value) {
                var match = name.match("^u?int([0-9]+)$");
                if (match && parseInt(match[1]) <= 48) {
                    value = value.toNumber();
                }
                return value;
            }
        }
    ]);
    return Reader1;
}();
// ../../node_modules/@ethersproject/keccak256/lib.esm/index.js
var import_js_sha3 = __toESM(require_sha3());
function keccak256(data) {
    return "0x" + import_js_sha3.default.keccak_256(arrayify(data));
}
// ../../node_modules/@ethersproject/address/lib.esm/_version.js
var version6 = "address/5.7.0";
// ../../node_modules/@ethersproject/address/lib.esm/index.js
var logger6 = new Logger(version6);
function getChecksumAddress(address) {
    if (!isHexString(address, 20)) {
        logger6.throwArgumentError("invalid address", "address", address);
    }
    address = address.toLowerCase();
    var chars = address.substring(2).split("");
    var expanded = new Uint8Array(40);
    for(var i = 0; i < 40; i++){
        expanded[i] = chars[i].charCodeAt(0);
    }
    var hashed = arrayify(keccak256(expanded));
    for(var i1 = 0; i1 < 40; i1 += 2){
        if (hashed[i1 >> 1] >> 4 >= 8) {
            chars[i1] = chars[i1].toUpperCase();
        }
        if ((hashed[i1 >> 1] & 15) >= 8) {
            chars[i1 + 1] = chars[i1 + 1].toUpperCase();
        }
    }
    return "0x" + chars.join("");
}
var MAX_SAFE_INTEGER = 9007199254740991;
function log10(x) {
    if (Math.log10) {
        return Math.log10(x);
    }
    return Math.log(x) / Math.LN10;
}
var ibanLookup = {};
for(var i = 0; i < 10; i++){
    ibanLookup[String(i)] = String(i);
}
for(var i1 = 0; i1 < 26; i1++){
    ibanLookup[String.fromCharCode(65 + i1)] = String(10 + i1);
}
var safeDigits = Math.floor(log10(MAX_SAFE_INTEGER));
function ibanChecksum(address) {
    address = address.toUpperCase();
    address = address.substring(4) + address.substring(0, 2) + "00";
    var expanded = address.split("").map(function(c) {
        return ibanLookup[c];
    }).join("");
    while(expanded.length >= safeDigits){
        var block = expanded.substring(0, safeDigits);
        expanded = parseInt(block, 10) % 97 + expanded.substring(block.length);
    }
    var checksum = String(98 - parseInt(expanded, 10) % 97);
    while(checksum.length < 2){
        checksum = "0" + checksum;
    }
    return checksum;
}
function getAddress(address) {
    var result = null;
    if (typeof address !== "string") {
        logger6.throwArgumentError("invalid address", "address", address);
    }
    if (address.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
        if (address.substring(0, 2) !== "0x") {
            address = "0x" + address;
        }
        result = getChecksumAddress(address);
        if (address.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && result !== address) {
            logger6.throwArgumentError("bad address checksum", "address", address);
        }
    } else if (address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
        if (address.substring(2, 4) !== ibanChecksum(address)) {
            logger6.throwArgumentError("bad icap checksum", "address", address);
        }
        result = _base36To16(address.substring(4));
        while(result.length < 40){
            result = "0" + result;
        }
        result = getChecksumAddress("0x" + result);
    } else {
        logger6.throwArgumentError("invalid address", "address", address);
    }
    return result;
}
// ../../node_modules/@ethersproject/abi/lib.esm/coders/address.js
var AddressCoder = /*#__PURE__*/ function(Coder) {
    _inherits(AddressCoder, Coder);
    var _super = _createSuper(AddressCoder);
    function AddressCoder(localName) {
        _classCallCheck(this, AddressCoder);
        return _super.call(this, "address", "address", localName, false);
    }
    _createClass(AddressCoder, [
        {
            key: "defaultValue",
            value: function defaultValue() {
                return "0x0000000000000000000000000000000000000000";
            }
        },
        {
            key: "encode",
            value: function encode(writer, value) {
                try {
                    value = getAddress(value);
                } catch (error) {
                    this._throwError(error.message, value);
                }
                return writer.writeValue(value);
            }
        },
        {
            key: "decode",
            value: function decode(reader) {
                return getAddress(hexZeroPad(reader.readValue().toHexString(), 20));
            }
        }
    ]);
    return AddressCoder;
}(Coder);
// ../../node_modules/@ethersproject/abi/lib.esm/coders/anonymous.js
var AnonymousCoder = /*#__PURE__*/ function(Coder) {
    _inherits(AnonymousCoder, Coder);
    var _super = _createSuper(AnonymousCoder);
    function AnonymousCoder(coder) {
        _classCallCheck(this, AnonymousCoder);
        var _this;
        _this = _super.call(this, coder.name, coder.type, void 0, coder.dynamic);
        _this.coder = coder;
        return _this;
    }
    _createClass(AnonymousCoder, [
        {
            key: "defaultValue",
            value: function defaultValue() {
                return this.coder.defaultValue();
            }
        },
        {
            key: "encode",
            value: function encode(writer, value) {
                return this.coder.encode(writer, value);
            }
        },
        {
            key: "decode",
            value: function decode(reader) {
                return this.coder.decode(reader);
            }
        }
    ]);
    return AnonymousCoder;
}(Coder);
// ../../node_modules/@ethersproject/abi/lib.esm/coders/array.js
var logger7 = new Logger(version5);
function pack(writer, coders, values) {
    var arrayValues = null;
    if (Array.isArray(values)) {
        arrayValues = values;
    } else if (values && typeof values === "object") {
        var unique = {};
        arrayValues = coders.map(function(coder) {
            var name = coder.localName;
            if (!name) {
                logger7.throwError("cannot encode object for signature with missing names", Logger.errors.INVALID_ARGUMENT, {
                    argument: "values",
                    coder: coder,
                    value: values
                });
            }
            if (unique[name]) {
                logger7.throwError("cannot encode object for signature with duplicate names", Logger.errors.INVALID_ARGUMENT, {
                    argument: "values",
                    coder: coder,
                    value: values
                });
            }
            unique[name] = true;
            return values[name];
        });
    } else {
        logger7.throwArgumentError("invalid tuple value", "tuple", values);
    }
    if (coders.length !== arrayValues.length) {
        logger7.throwArgumentError("types/value length mismatch", "tuple", values);
    }
    var staticWriter = new Writer(writer.wordSize);
    var dynamicWriter = new Writer(writer.wordSize);
    var updateFuncs = [];
    coders.forEach(function(coder, index) {
        var value = arrayValues[index];
        if (coder.dynamic) {
            var dynamicOffset = dynamicWriter.length;
            coder.encode(dynamicWriter, value);
            var updateFunc = staticWriter.writeUpdatableValue();
            updateFuncs.push(function(baseOffset) {
                updateFunc(baseOffset + dynamicOffset);
            });
        } else {
            coder.encode(staticWriter, value);
        }
    });
    updateFuncs.forEach(function(func) {
        func(staticWriter.length);
    });
    var length = writer.appendWriter(staticWriter);
    length += writer.appendWriter(dynamicWriter);
    return length;
}
function unpack(reader, coders) {
    var _loop = function(i) {
        var value = values[i];
        if (_instanceof(value, Error)) {
            Object.defineProperty(values, i, {
                enumerable: true,
                get: function() {
                    throw value;
                }
            });
        }
    };
    var values = [];
    var baseReader = reader.subReader(0);
    coders.forEach(function(coder) {
        var value = null;
        if (coder.dynamic) {
            var offset = reader.readValue();
            var offsetReader = baseReader.subReader(offset.toNumber());
            try {
                value = coder.decode(offsetReader);
            } catch (error) {
                if (error.code === Logger.errors.BUFFER_OVERRUN) {
                    throw error;
                }
                value = error;
                value.baseType = coder.name;
                value.name = coder.localName;
                value.type = coder.type;
            }
        } else {
            try {
                value = coder.decode(reader);
            } catch (error) {
                if (error.code === Logger.errors.BUFFER_OVERRUN) {
                    throw error;
                }
                value = error;
                value.baseType = coder.name;
                value.name = coder.localName;
                value.type = coder.type;
            }
        }
        if (value != void 0) {
            values.push(value);
        }
    });
    var uniqueNames = coders.reduce(function(accum, coder) {
        var name = coder.localName;
        if (name) {
            if (!accum[name]) {
                accum[name] = 0;
            }
            accum[name]++;
        }
        return accum;
    }, {});
    coders.forEach(function(coder, index) {
        var name = coder.localName;
        if (!name || uniqueNames[name] !== 1) {
            return;
        }
        if (name === "length") {
            name = "_length";
        }
        if (values[name] != null) {
            return;
        }
        var value = values[index];
        if (_instanceof(value, Error)) {
            Object.defineProperty(values, name, {
                enumerable: true,
                get: function() {
                    throw value;
                }
            });
        } else {
            values[name] = value;
        }
    });
    for(var i = 0; i < values.length; i++)_loop(i);
    return Object.freeze(values);
}
var ArrayCoder = /*#__PURE__*/ function(Coder) {
    _inherits(ArrayCoder, Coder);
    var _super = _createSuper(ArrayCoder);
    function ArrayCoder(coder, length, localName) {
        _classCallCheck(this, ArrayCoder);
        var _this;
        var type = coder.type + "[" + (length >= 0 ? length : "") + "]";
        var dynamic = length === -1 || coder.dynamic;
        _this = _super.call(this, "array", type, localName, dynamic);
        _this.coder = coder;
        _this.length = length;
        return _this;
    }
    _createClass(ArrayCoder, [
        {
            key: "defaultValue",
            value: function defaultValue() {
                var defaultChild = this.coder.defaultValue();
                var result = [];
                for(var i = 0; i < this.length; i++){
                    result.push(defaultChild);
                }
                return result;
            }
        },
        {
            key: "encode",
            value: function encode(writer, value) {
                if (!Array.isArray(value)) {
                    this._throwError("expected array value", value);
                }
                var count = this.length;
                if (count === -1) {
                    count = value.length;
                    writer.writeValue(value.length);
                }
                logger7.checkArgumentCount(value.length, count, "coder array" + (this.localName ? " " + this.localName : ""));
                var coders = [];
                for(var i = 0; i < value.length; i++){
                    coders.push(this.coder);
                }
                return pack(writer, coders, value);
            }
        },
        {
            key: "decode",
            value: function decode(reader) {
                var count = this.length;
                if (count === -1) {
                    count = reader.readValue().toNumber();
                    if (count * 32 > reader._data.length) {
                        logger7.throwError("insufficient data length", Logger.errors.BUFFER_OVERRUN, {
                            length: reader._data.length,
                            count: count
                        });
                    }
                }
                var coders = [];
                for(var i = 0; i < count; i++){
                    coders.push(new AnonymousCoder(this.coder));
                }
                return reader.coerce(this.name, unpack(reader, coders));
            }
        }
    ]);
    return ArrayCoder;
}(Coder);
// ../../node_modules/@ethersproject/abi/lib.esm/coders/boolean.js
var BooleanCoder = /*#__PURE__*/ function(Coder) {
    _inherits(BooleanCoder, Coder);
    var _super = _createSuper(BooleanCoder);
    function BooleanCoder(localName) {
        _classCallCheck(this, BooleanCoder);
        return _super.call(this, "bool", "bool", localName, false);
    }
    _createClass(BooleanCoder, [
        {
            key: "defaultValue",
            value: function defaultValue() {
                return false;
            }
        },
        {
            key: "encode",
            value: function encode(writer, value) {
                return writer.writeValue(value ? 1 : 0);
            }
        },
        {
            key: "decode",
            value: function decode(reader) {
                return reader.coerce(this.type, !reader.readValue().isZero());
            }
        }
    ]);
    return BooleanCoder;
}(Coder);
// ../../node_modules/@ethersproject/abi/lib.esm/coders/bytes.js
var DynamicBytesCoder = /*#__PURE__*/ function(Coder) {
    _inherits(DynamicBytesCoder, Coder);
    var _super = _createSuper(DynamicBytesCoder);
    function DynamicBytesCoder(type, localName) {
        _classCallCheck(this, DynamicBytesCoder);
        return _super.call(this, type, type, localName, true);
    }
    _createClass(DynamicBytesCoder, [
        {
            key: "defaultValue",
            value: function defaultValue() {
                return "0x";
            }
        },
        {
            key: "encode",
            value: function encode(writer, value) {
                value = arrayify(value);
                var length = writer.writeValue(value.length);
                length += writer.writeBytes(value);
                return length;
            }
        },
        {
            key: "decode",
            value: function decode(reader) {
                return reader.readBytes(reader.readValue().toNumber(), true);
            }
        }
    ]);
    return DynamicBytesCoder;
}(Coder);
var BytesCoder = /*#__PURE__*/ function(DynamicBytesCoder) {
    _inherits(BytesCoder, DynamicBytesCoder);
    var _super = _createSuper(BytesCoder);
    function BytesCoder(localName) {
        _classCallCheck(this, BytesCoder);
        return _super.call(this, "bytes", localName);
    }
    _createClass(BytesCoder, [
        {
            key: "decode",
            value: function decode(reader) {
                return reader.coerce(this.name, hexlify(_get(_getPrototypeOf(BytesCoder.prototype), "decode", this).call(this, reader)));
            }
        }
    ]);
    return BytesCoder;
}(DynamicBytesCoder);
// ../../node_modules/@ethersproject/abi/lib.esm/coders/fixed-bytes.js
var FixedBytesCoder = /*#__PURE__*/ function(Coder) {
    _inherits(FixedBytesCoder, Coder);
    var _super = _createSuper(FixedBytesCoder);
    function FixedBytesCoder(size, localName) {
        _classCallCheck(this, FixedBytesCoder);
        var _this;
        var name = "bytes" + String(size);
        _this = _super.call(this, name, name, localName, false);
        _this.size = size;
        return _this;
    }
    _createClass(FixedBytesCoder, [
        {
            key: "defaultValue",
            value: function defaultValue() {
                return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
            }
        },
        {
            key: "encode",
            value: function encode(writer, value) {
                var data = arrayify(value);
                if (data.length !== this.size) {
                    this._throwError("incorrect data length", value);
                }
                return writer.writeBytes(data);
            }
        },
        {
            key: "decode",
            value: function decode(reader) {
                return reader.coerce(this.name, hexlify(reader.readBytes(this.size)));
            }
        }
    ]);
    return FixedBytesCoder;
}(Coder);
// ../../node_modules/@ethersproject/abi/lib.esm/coders/null.js
var NullCoder = /*#__PURE__*/ function(Coder) {
    _inherits(NullCoder, Coder);
    var _super = _createSuper(NullCoder);
    function NullCoder(localName) {
        _classCallCheck(this, NullCoder);
        return _super.call(this, "null", "", localName, false);
    }
    _createClass(NullCoder, [
        {
            key: "defaultValue",
            value: function defaultValue() {
                return null;
            }
        },
        {
            key: "encode",
            value: function encode(writer, value) {
                if (value != null) {
                    this._throwError("not null", value);
                }
                return writer.writeBytes([]);
            }
        },
        {
            key: "decode",
            value: function decode(reader) {
                reader.readBytes(0);
                return reader.coerce(this.name, null);
            }
        }
    ]);
    return NullCoder;
}(Coder);
// ../../node_modules/@ethersproject/constants/lib.esm/bignumbers.js
var NegativeOne = /* @__PURE__ */ BigNumber.from(-1);
var Zero = /* @__PURE__ */ BigNumber.from(0);
var One = /* @__PURE__ */ BigNumber.from(1);
var MaxUint256 = /* @__PURE__ */ BigNumber.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
// ../../node_modules/@ethersproject/abi/lib.esm/coders/number.js
var NumberCoder = /*#__PURE__*/ function(Coder) {
    _inherits(NumberCoder, Coder);
    var _super = _createSuper(NumberCoder);
    function NumberCoder(size, signed, localName) {
        _classCallCheck(this, NumberCoder);
        var _this;
        var name = (signed ? "int" : "uint") + size * 8;
        _this = _super.call(this, name, name, localName, false);
        _this.size = size;
        _this.signed = signed;
        return _this;
    }
    _createClass(NumberCoder, [
        {
            key: "defaultValue",
            value: function defaultValue() {
                return 0;
            }
        },
        {
            key: "encode",
            value: function encode(writer, value) {
                var v = BigNumber.from(value);
                var maxUintValue = MaxUint256.mask(writer.wordSize * 8);
                if (this.signed) {
                    var bounds = maxUintValue.mask(this.size * 8 - 1);
                    if (v.gt(bounds) || v.lt(bounds.add(One).mul(NegativeOne))) {
                        this._throwError("value out-of-bounds", value);
                    }
                } else if (v.lt(Zero) || v.gt(maxUintValue.mask(this.size * 8))) {
                    this._throwError("value out-of-bounds", value);
                }
                v = v.toTwos(this.size * 8).mask(this.size * 8);
                if (this.signed) {
                    v = v.fromTwos(this.size * 8).toTwos(8 * writer.wordSize);
                }
                return writer.writeValue(v);
            }
        },
        {
            key: "decode",
            value: function decode(reader) {
                var value = reader.readValue().mask(this.size * 8);
                if (this.signed) {
                    value = value.fromTwos(this.size * 8);
                }
                return reader.coerce(this.name, value);
            }
        }
    ]);
    return NumberCoder;
}(Coder);
// ../../node_modules/@ethersproject/strings/lib.esm/_version.js
var version7 = "strings/5.7.0";
// ../../node_modules/@ethersproject/strings/lib.esm/utf8.js
var logger8 = new Logger(version7);
var UnicodeNormalizationForm;
(function(UnicodeNormalizationForm2) {
    UnicodeNormalizationForm2["current"] = "";
    UnicodeNormalizationForm2["NFC"] = "NFC";
    UnicodeNormalizationForm2["NFD"] = "NFD";
    UnicodeNormalizationForm2["NFKC"] = "NFKC";
    UnicodeNormalizationForm2["NFKD"] = "NFKD";
})(UnicodeNormalizationForm || (UnicodeNormalizationForm = {}));
var Utf8ErrorReason;
(function(Utf8ErrorReason2) {
    Utf8ErrorReason2["UNEXPECTED_CONTINUE"] = "unexpected continuation byte";
    Utf8ErrorReason2["BAD_PREFIX"] = "bad codepoint prefix";
    Utf8ErrorReason2["OVERRUN"] = "string overrun";
    Utf8ErrorReason2["MISSING_CONTINUE"] = "missing continuation byte";
    Utf8ErrorReason2["OUT_OF_RANGE"] = "out of UTF-8 range";
    Utf8ErrorReason2["UTF16_SURROGATE"] = "UTF-16 surrogate";
    Utf8ErrorReason2["OVERLONG"] = "overlong representation";
})(Utf8ErrorReason || (Utf8ErrorReason = {}));
function errorFunc(reason, offset, bytes, output, badCodepoint) {
    return logger8.throwArgumentError("invalid codepoint at offset ".concat(offset, "; ").concat(reason), "bytes", bytes);
}
function ignoreFunc(reason, offset, bytes, output, badCodepoint) {
    if (reason === Utf8ErrorReason.BAD_PREFIX || reason === Utf8ErrorReason.UNEXPECTED_CONTINUE) {
        var i = 0;
        for(var o = offset + 1; o < bytes.length; o++){
            if (bytes[o] >> 6 !== 2) {
                break;
            }
            i++;
        }
        return i;
    }
    if (reason === Utf8ErrorReason.OVERRUN) {
        return bytes.length - offset - 1;
    }
    return 0;
}
function replaceFunc(reason, offset, bytes, output, badCodepoint) {
    if (reason === Utf8ErrorReason.OVERLONG) {
        output.push(badCodepoint);
        return 0;
    }
    output.push(65533);
    return ignoreFunc(reason, offset, bytes, output, badCodepoint);
}
var Utf8ErrorFuncs = Object.freeze({
    error: errorFunc,
    ignore: ignoreFunc,
    replace: replaceFunc
});
function getUtf8CodePoints(bytes, onError) {
    if (onError == null) {
        onError = Utf8ErrorFuncs.error;
    }
    bytes = arrayify(bytes);
    var result = [];
    var i = 0;
    while(i < bytes.length){
        var c = bytes[i++];
        if (c >> 7 === 0) {
            result.push(c);
            continue;
        }
        var extraLength = null;
        var overlongMask = null;
        if ((c & 224) === 192) {
            extraLength = 1;
            overlongMask = 127;
        } else if ((c & 240) === 224) {
            extraLength = 2;
            overlongMask = 2047;
        } else if ((c & 248) === 240) {
            extraLength = 3;
            overlongMask = 65535;
        } else {
            if ((c & 192) === 128) {
                i += onError(Utf8ErrorReason.UNEXPECTED_CONTINUE, i - 1, bytes, result);
            } else {
                i += onError(Utf8ErrorReason.BAD_PREFIX, i - 1, bytes, result);
            }
            continue;
        }
        if (i - 1 + extraLength >= bytes.length) {
            i += onError(Utf8ErrorReason.OVERRUN, i - 1, bytes, result);
            continue;
        }
        var res = c & (1 << 8 - extraLength - 1) - 1;
        for(var j = 0; j < extraLength; j++){
            var nextChar = bytes[i];
            if ((nextChar & 192) != 128) {
                i += onError(Utf8ErrorReason.MISSING_CONTINUE, i, bytes, result);
                res = null;
                break;
            }
            ;
            res = res << 6 | nextChar & 63;
            i++;
        }
        if (res === null) {
            continue;
        }
        if (res > 1114111) {
            i += onError(Utf8ErrorReason.OUT_OF_RANGE, i - 1 - extraLength, bytes, result, res);
            continue;
        }
        if (res >= 55296 && res <= 57343) {
            i += onError(Utf8ErrorReason.UTF16_SURROGATE, i - 1 - extraLength, bytes, result, res);
            continue;
        }
        if (res <= overlongMask) {
            i += onError(Utf8ErrorReason.OVERLONG, i - 1 - extraLength, bytes, result, res);
            continue;
        }
        result.push(res);
    }
    return result;
}
function toUtf8Bytes(str) {
    var form = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : UnicodeNormalizationForm.current;
    if (form != UnicodeNormalizationForm.current) {
        logger8.checkNormalize();
        str = str.normalize(form);
    }
    var result = [];
    for(var i = 0; i < str.length; i++){
        var c = str.charCodeAt(i);
        if (c < 128) {
            result.push(c);
        } else if (c < 2048) {
            result.push(c >> 6 | 192);
            result.push(c & 63 | 128);
        } else if ((c & 64512) == 55296) {
            i++;
            var c2 = str.charCodeAt(i);
            if (i >= str.length || (c2 & 64512) !== 56320) {
                throw new Error("invalid utf-8 string");
            }
            var pair = 65536 + ((c & 1023) << 10) + (c2 & 1023);
            result.push(pair >> 18 | 240);
            result.push(pair >> 12 & 63 | 128);
            result.push(pair >> 6 & 63 | 128);
            result.push(pair & 63 | 128);
        } else {
            result.push(c >> 12 | 224);
            result.push(c >> 6 & 63 | 128);
            result.push(c & 63 | 128);
        }
    }
    return arrayify(result);
}
function _toUtf8String(codePoints) {
    return codePoints.map(function(codePoint) {
        if (codePoint <= 65535) {
            return String.fromCharCode(codePoint);
        }
        codePoint -= 65536;
        return String.fromCharCode((codePoint >> 10 & 1023) + 55296, (codePoint & 1023) + 56320);
    }).join("");
}
function toUtf8String(bytes, onError) {
    return _toUtf8String(getUtf8CodePoints(bytes, onError));
}
// ../../node_modules/@ethersproject/abi/lib.esm/coders/string.js
var StringCoder = /*#__PURE__*/ function(DynamicBytesCoder) {
    _inherits(StringCoder, DynamicBytesCoder);
    var _super = _createSuper(StringCoder);
    function StringCoder(localName) {
        _classCallCheck(this, StringCoder);
        return _super.call(this, "string", localName);
    }
    _createClass(StringCoder, [
        {
            key: "defaultValue",
            value: function defaultValue() {
                return "";
            }
        },
        {
            key: "encode",
            value: function encode(writer, value) {
                return _get(_getPrototypeOf(StringCoder.prototype), "encode", this).call(this, writer, toUtf8Bytes(value));
            }
        },
        {
            key: "decode",
            value: function decode(reader) {
                return toUtf8String(_get(_getPrototypeOf(StringCoder.prototype), "decode", this).call(this, reader));
            }
        }
    ]);
    return StringCoder;
}(DynamicBytesCoder);
// ../../node_modules/@ethersproject/abi/lib.esm/coders/tuple.js
var TupleCoder = /*#__PURE__*/ function(Coder) {
    _inherits(TupleCoder, Coder);
    var _super = _createSuper(TupleCoder);
    function TupleCoder(coders, localName) {
        _classCallCheck(this, TupleCoder);
        var _this;
        var dynamic = false;
        var types = [];
        coders.forEach(function(coder) {
            if (coder.dynamic) {
                dynamic = true;
            }
            types.push(coder.type);
        });
        var type = "tuple(" + types.join(",") + ")";
        _this = _super.call(this, "tuple", type, localName, dynamic);
        _this.coders = coders;
        return _this;
    }
    _createClass(TupleCoder, [
        {
            key: "defaultValue",
            value: function defaultValue() {
                var values = [];
                this.coders.forEach(function(coder) {
                    values.push(coder.defaultValue());
                });
                var uniqueNames = this.coders.reduce(function(accum, coder) {
                    var name = coder.localName;
                    if (name) {
                        if (!accum[name]) {
                            accum[name] = 0;
                        }
                        accum[name]++;
                    }
                    return accum;
                }, {});
                this.coders.forEach(function(coder, index) {
                    var name = coder.localName;
                    if (!name || uniqueNames[name] !== 1) {
                        return;
                    }
                    if (name === "length") {
                        name = "_length";
                    }
                    if (values[name] != null) {
                        return;
                    }
                    values[name] = values[index];
                });
                return Object.freeze(values);
            }
        },
        {
            key: "encode",
            value: function encode(writer, value) {
                return pack(writer, this.coders, value);
            }
        },
        {
            key: "decode",
            value: function decode(reader) {
                return reader.coerce(this.name, unpack(reader, this.coders));
            }
        }
    ]);
    return TupleCoder;
}(Coder);
// ../../node_modules/@ethersproject/abi/lib.esm/abi-coder.js
var logger9 = new Logger(version5);
var paramTypeBytes = new RegExp(/^bytes([0-9]*)$/);
var paramTypeNumber = new RegExp(/^(u?int)([0-9]*)$/);
var AbiCoder = /*#__PURE__*/ function() {
    function AbiCoder(coerceFunc) {
        _classCallCheck(this, AbiCoder);
        defineReadOnly(this, "coerceFunc", coerceFunc || null);
    }
    _createClass(AbiCoder, [
        {
            key: "_getCoder",
            value: function _getCoder(param) {
                var _this = this;
                switch(param.baseType){
                    case "address":
                        return new AddressCoder(param.name);
                    case "bool":
                        return new BooleanCoder(param.name);
                    case "string":
                        return new StringCoder(param.name);
                    case "bytes":
                        return new BytesCoder(param.name);
                    case "array":
                        return new ArrayCoder(this._getCoder(param.arrayChildren), param.arrayLength, param.name);
                    case "tuple":
                        return new TupleCoder((param.components || []).map(function(component) {
                            return _this._getCoder(component);
                        }), param.name);
                    case "":
                        return new NullCoder(param.name);
                }
                var match = param.type.match(paramTypeNumber);
                if (match) {
                    var size = parseInt(match[2] || "256");
                    if (size === 0 || size > 256 || size % 8 !== 0) {
                        logger9.throwArgumentError("invalid " + match[1] + " bit length", "param", param);
                    }
                    return new NumberCoder(size / 8, match[1] === "int", param.name);
                }
                match = param.type.match(paramTypeBytes);
                if (match) {
                    var size1 = parseInt(match[1]);
                    if (size1 === 0 || size1 > 32) {
                        logger9.throwArgumentError("invalid bytes length", "param", param);
                    }
                    return new FixedBytesCoder(size1, param.name);
                }
                return logger9.throwArgumentError("invalid type", "type", param.type);
            }
        },
        {
            key: "_getWordSize",
            value: function _getWordSize() {
                return 32;
            }
        },
        {
            key: "_getReader",
            value: function _getReader(data, allowLoose) {
                return new Reader(data, this._getWordSize(), this.coerceFunc, allowLoose);
            }
        },
        {
            key: "_getWriter",
            value: function _getWriter() {
                return new Writer(this._getWordSize());
            }
        },
        {
            key: "getDefaultValue",
            value: function getDefaultValue(types) {
                var _this = this;
                var coders = types.map(function(type) {
                    return _this._getCoder(ParamType.from(type));
                });
                var coder = new TupleCoder(coders, "_");
                return coder.defaultValue();
            }
        },
        {
            key: "encode",
            value: function encode(types, values) {
                var _this = this;
                if (types.length !== values.length) {
                    logger9.throwError("types/values length mismatch", Logger.errors.INVALID_ARGUMENT, {
                        count: {
                            types: types.length,
                            values: values.length
                        },
                        value: {
                            types: types,
                            values: values
                        }
                    });
                }
                var coders = types.map(function(type) {
                    return _this._getCoder(ParamType.from(type));
                });
                var coder = new TupleCoder(coders, "_");
                var writer = this._getWriter();
                coder.encode(writer, values);
                return writer.data;
            }
        },
        {
            key: "decode",
            value: function decode(types, data, loose) {
                var _this = this;
                var coders = types.map(function(type) {
                    return _this._getCoder(ParamType.from(type));
                });
                var coder = new TupleCoder(coders, "_");
                return coder.decode(this._getReader(arrayify(data), loose));
            }
        }
    ]);
    return AbiCoder;
}();
var defaultAbiCoder = new AbiCoder();
// ../../node_modules/@ethersproject/hash/lib.esm/id.js
function id(text) {
    return keccak256(toUtf8Bytes(text));
}
// ../../node_modules/@ethersproject/abi/lib.esm/interface.js
var logger10 = new Logger(version5);
var LogDescription = /*#__PURE__*/ function(Description) {
    _inherits(LogDescription, Description);
    var _super = _createSuper(LogDescription);
    function LogDescription() {
        _classCallCheck(this, LogDescription);
        return _super.apply(this, arguments);
    }
    return LogDescription;
}(Description);
var TransactionDescription = /*#__PURE__*/ function(Description) {
    _inherits(TransactionDescription, Description);
    var _super = _createSuper(TransactionDescription);
    function TransactionDescription() {
        _classCallCheck(this, TransactionDescription);
        return _super.apply(this, arguments);
    }
    return TransactionDescription;
}(Description);
var ErrorDescription = /*#__PURE__*/ function(Description) {
    _inherits(ErrorDescription, Description);
    var _super = _createSuper(ErrorDescription);
    function ErrorDescription() {
        _classCallCheck(this, ErrorDescription);
        return _super.apply(this, arguments);
    }
    return ErrorDescription;
}(Description);
var Indexed = /*#__PURE__*/ function(Description) {
    _inherits(Indexed, Description);
    var _super = _createSuper(Indexed);
    function Indexed() {
        _classCallCheck(this, Indexed);
        return _super.apply(this, arguments);
    }
    _createClass(Indexed, null, [
        {
            key: "isIndexed",
            value: function isIndexed(value) {
                return !!(value && value._isIndexed);
            }
        }
    ]);
    return Indexed;
}(Description);
var BuiltinErrors = {
    "0x08c379a0": {
        signature: "Error(string)",
        name: "Error",
        inputs: [
            "string"
        ],
        reason: true
    },
    "0x4e487b71": {
        signature: "Panic(uint256)",
        name: "Panic",
        inputs: [
            "uint256"
        ]
    }
};
function wrapAccessError(property, error) {
    var wrap = new Error("deferred error during ABI decoding triggered accessing ".concat(property));
    wrap.error = error;
    return wrap;
}
var Interface = /*#__PURE__*/ function _target() {
    function Interface(fragments) {
        var _this = this;
        _classCallCheck(this, Interface);
        var abi = [];
        if (typeof fragments === "string") {
            abi = JSON.parse(fragments);
        } else {
            abi = fragments;
        }
        defineReadOnly(this, "fragments", abi.map(function(fragment) {
            return Fragment.from(fragment);
        }).filter(function(fragment) {
            return fragment != null;
        }));
        defineReadOnly(this, "_abiCoder", getStatic(_instanceof(this, Interface) ? this.constructor : void 0, "getAbiCoder")());
        defineReadOnly(this, "functions", {});
        defineReadOnly(this, "errors", {});
        defineReadOnly(this, "events", {});
        defineReadOnly(this, "structs", {});
        this.fragments.forEach(function(fragment) {
            var bucket = null;
            switch(fragment.type){
                case "constructor":
                    if (_this.deploy) {
                        logger10.warn("duplicate definition - constructor");
                        return;
                    }
                    defineReadOnly(_this, "deploy", fragment);
                    return;
                case "function":
                    bucket = _this.functions;
                    break;
                case "event":
                    bucket = _this.events;
                    break;
                case "error":
                    bucket = _this.errors;
                    break;
                default:
                    return;
            }
            var signature = fragment.format();
            if (bucket[signature]) {
                logger10.warn("duplicate definition - " + signature);
                return;
            }
            bucket[signature] = fragment;
        });
        if (!this.deploy) {
            defineReadOnly(this, "deploy", ConstructorFragment.from({
                payable: false,
                type: "constructor"
            }));
        }
        defineReadOnly(this, "_isInterface", true);
    }
    _createClass(Interface, [
        {
            key: "format",
            value: function format(format) {
                if (!format) {
                    format = FormatTypes.full;
                }
                if (format === FormatTypes.sighash) {
                    logger10.throwArgumentError("interface does not support formatting sighash", "format", format);
                }
                var abi = this.fragments.map(function(fragment) {
                    return fragment.format(format);
                });
                if (format === FormatTypes.json) {
                    return JSON.stringify(abi.map(function(j) {
                        return JSON.parse(j);
                    }));
                }
                return abi;
            }
        },
        {
            // Find a function definition by any means necessary (unless it is ambiguous)
            key: "getFunction",
            value: function getFunction(nameOrSignatureOrSighash) {
                if (isHexString(nameOrSignatureOrSighash)) {
                    for(var name in this.functions){
                        if (nameOrSignatureOrSighash === this.getSighash(name)) {
                            return this.functions[name];
                        }
                    }
                    logger10.throwArgumentError("no matching function", "sighash", nameOrSignatureOrSighash);
                }
                if (nameOrSignatureOrSighash.indexOf("(") === -1) {
                    var name1 = nameOrSignatureOrSighash.trim();
                    var matching = Object.keys(this.functions).filter(function(f) {
                        return f.split("(")[0] === name1;
                    });
                    if (matching.length === 0) {
                        logger10.throwArgumentError("no matching function", "name", name1);
                    } else if (matching.length > 1) {
                        logger10.throwArgumentError("multiple matching functions", "name", name1);
                    }
                    return this.functions[matching[0]];
                }
                var result = this.functions[FunctionFragment.fromString(nameOrSignatureOrSighash).format()];
                if (!result) {
                    logger10.throwArgumentError("no matching function", "signature", nameOrSignatureOrSighash);
                }
                return result;
            }
        },
        {
            // Find an event definition by any means necessary (unless it is ambiguous)
            key: "getEvent",
            value: function getEvent(nameOrSignatureOrTopic) {
                if (isHexString(nameOrSignatureOrTopic)) {
                    var topichash = nameOrSignatureOrTopic.toLowerCase();
                    for(var name in this.events){
                        if (topichash === this.getEventTopic(name)) {
                            return this.events[name];
                        }
                    }
                    logger10.throwArgumentError("no matching event", "topichash", topichash);
                }
                if (nameOrSignatureOrTopic.indexOf("(") === -1) {
                    var name1 = nameOrSignatureOrTopic.trim();
                    var matching = Object.keys(this.events).filter(function(f) {
                        return f.split("(")[0] === name1;
                    });
                    if (matching.length === 0) {
                        logger10.throwArgumentError("no matching event", "name", name1);
                    } else if (matching.length > 1) {
                        logger10.throwArgumentError("multiple matching events", "name", name1);
                    }
                    return this.events[matching[0]];
                }
                var result = this.events[EventFragment.fromString(nameOrSignatureOrTopic).format()];
                if (!result) {
                    logger10.throwArgumentError("no matching event", "signature", nameOrSignatureOrTopic);
                }
                return result;
            }
        },
        {
            // Find a function definition by any means necessary (unless it is ambiguous)
            key: "getError",
            value: function getError(nameOrSignatureOrSighash) {
                if (isHexString(nameOrSignatureOrSighash)) {
                    var getSighash = getStatic(this.constructor, "getSighash");
                    for(var name in this.errors){
                        var error = this.errors[name];
                        if (nameOrSignatureOrSighash === getSighash(error)) {
                            return this.errors[name];
                        }
                    }
                    logger10.throwArgumentError("no matching error", "sighash", nameOrSignatureOrSighash);
                }
                if (nameOrSignatureOrSighash.indexOf("(") === -1) {
                    var name1 = nameOrSignatureOrSighash.trim();
                    var matching = Object.keys(this.errors).filter(function(f) {
                        return f.split("(")[0] === name1;
                    });
                    if (matching.length === 0) {
                        logger10.throwArgumentError("no matching error", "name", name1);
                    } else if (matching.length > 1) {
                        logger10.throwArgumentError("multiple matching errors", "name", name1);
                    }
                    return this.errors[matching[0]];
                }
                var result = this.errors[FunctionFragment.fromString(nameOrSignatureOrSighash).format()];
                if (!result) {
                    logger10.throwArgumentError("no matching error", "signature", nameOrSignatureOrSighash);
                }
                return result;
            }
        },
        {
            // Get the sighash (the bytes4 selector) used by Solidity to identify a function
            key: "getSighash",
            value: function getSighash(fragment) {
                if (typeof fragment === "string") {
                    try {
                        fragment = this.getFunction(fragment);
                    } catch (error) {
                        try {
                            fragment = this.getError(fragment);
                        } catch (_) {
                            throw error;
                        }
                    }
                }
                return getStatic(this.constructor, "getSighash")(fragment);
            }
        },
        {
            // Get the topic (the bytes32 hash) used by Solidity to identify an event
            key: "getEventTopic",
            value: function getEventTopic(eventFragment) {
                if (typeof eventFragment === "string") {
                    eventFragment = this.getEvent(eventFragment);
                }
                return getStatic(this.constructor, "getEventTopic")(eventFragment);
            }
        },
        {
            key: "_decodeParams",
            value: function _decodeParams(params, data) {
                return this._abiCoder.decode(params, data);
            }
        },
        {
            key: "_encodeParams",
            value: function _encodeParams(params, values) {
                return this._abiCoder.encode(params, values);
            }
        },
        {
            key: "encodeDeploy",
            value: function encodeDeploy(values) {
                return this._encodeParams(this.deploy.inputs, values || []);
            }
        },
        {
            key: "decodeErrorResult",
            value: function decodeErrorResult(fragment, data) {
                if (typeof fragment === "string") {
                    fragment = this.getError(fragment);
                }
                var bytes = arrayify(data);
                if (hexlify(bytes.slice(0, 4)) !== this.getSighash(fragment)) {
                    logger10.throwArgumentError("data signature does not match error ".concat(fragment.name, "."), "data", hexlify(bytes));
                }
                return this._decodeParams(fragment.inputs, bytes.slice(4));
            }
        },
        {
            key: "encodeErrorResult",
            value: function encodeErrorResult(fragment, values) {
                if (typeof fragment === "string") {
                    fragment = this.getError(fragment);
                }
                return hexlify(concat([
                    this.getSighash(fragment),
                    this._encodeParams(fragment.inputs, values || [])
                ]));
            }
        },
        {
            // Decode the data for a function call (e.g. tx.data)
            key: "decodeFunctionData",
            value: function decodeFunctionData(functionFragment, data) {
                if (typeof functionFragment === "string") {
                    functionFragment = this.getFunction(functionFragment);
                }
                var bytes = arrayify(data);
                if (hexlify(bytes.slice(0, 4)) !== this.getSighash(functionFragment)) {
                    logger10.throwArgumentError("data signature does not match function ".concat(functionFragment.name, "."), "data", hexlify(bytes));
                }
                return this._decodeParams(functionFragment.inputs, bytes.slice(4));
            }
        },
        {
            // Encode the data for a function call (e.g. tx.data)
            key: "encodeFunctionData",
            value: function encodeFunctionData(functionFragment, values) {
                if (typeof functionFragment === "string") {
                    functionFragment = this.getFunction(functionFragment);
                }
                return hexlify(concat([
                    this.getSighash(functionFragment),
                    this._encodeParams(functionFragment.inputs, values || [])
                ]));
            }
        },
        {
            // Decode the result from a function call (e.g. from eth_call)
            key: "decodeFunctionResult",
            value: function decodeFunctionResult(functionFragment, data) {
                if (typeof functionFragment === "string") {
                    functionFragment = this.getFunction(functionFragment);
                }
                var bytes = arrayify(data);
                var reason = null;
                var message = "";
                var errorArgs = null;
                var errorName = null;
                var errorSignature = null;
                switch(bytes.length % this._abiCoder._getWordSize()){
                    case 0:
                        try {
                            return this._abiCoder.decode(functionFragment.outputs, bytes);
                        } catch (error) {}
                        break;
                    case 4:
                        {
                            var selector = hexlify(bytes.slice(0, 4));
                            var builtin = BuiltinErrors[selector];
                            if (builtin) {
                                errorArgs = this._abiCoder.decode(builtin.inputs, bytes.slice(4));
                                errorName = builtin.name;
                                errorSignature = builtin.signature;
                                if (builtin.reason) {
                                    reason = errorArgs[0];
                                }
                                if (errorName === "Error") {
                                    message = "; VM Exception while processing transaction: reverted with reason string ".concat(JSON.stringify(errorArgs[0]));
                                } else if (errorName === "Panic") {
                                    message = "; VM Exception while processing transaction: reverted with panic code ".concat(errorArgs[0]);
                                }
                            } else {
                                try {
                                    var error = this.getError(selector);
                                    errorArgs = this._abiCoder.decode(error.inputs, bytes.slice(4));
                                    errorName = error.name;
                                    errorSignature = error.format();
                                } catch (error) {}
                            }
                            break;
                        }
                }
                return logger10.throwError("call revert exception" + message, Logger.errors.CALL_EXCEPTION, {
                    method: functionFragment.format(),
                    data: hexlify(data),
                    errorArgs: errorArgs,
                    errorName: errorName,
                    errorSignature: errorSignature,
                    reason: reason
                });
            }
        },
        {
            // Encode the result for a function call (e.g. for eth_call)
            key: "encodeFunctionResult",
            value: function encodeFunctionResult(functionFragment, values) {
                if (typeof functionFragment === "string") {
                    functionFragment = this.getFunction(functionFragment);
                }
                return hexlify(this._abiCoder.encode(functionFragment.outputs, values || []));
            }
        },
        {
            // Create the filter for the event with search criteria (e.g. for eth_filterLog)
            key: "encodeFilterTopics",
            value: function encodeFilterTopics(eventFragment, values) {
                var _this = this;
                if (typeof eventFragment === "string") {
                    eventFragment = this.getEvent(eventFragment);
                }
                if (values.length > eventFragment.inputs.length) {
                    logger10.throwError("too many arguments for " + eventFragment.format(), Logger.errors.UNEXPECTED_ARGUMENT, {
                        argument: "values",
                        value: values
                    });
                }
                var topics = [];
                if (!eventFragment.anonymous) {
                    topics.push(this.getEventTopic(eventFragment));
                }
                var encodeTopic = function(param, value) {
                    if (param.type === "string") {
                        return id(value);
                    } else if (param.type === "bytes") {
                        return keccak256(hexlify(value));
                    }
                    if (param.type === "bool" && typeof value === "boolean") {
                        value = value ? "0x01" : "0x00";
                    }
                    if (param.type.match(/^u?int/)) {
                        value = BigNumber.from(value).toHexString();
                    }
                    if (param.type === "address") {
                        _this._abiCoder.encode([
                            "address"
                        ], [
                            value
                        ]);
                    }
                    return hexZeroPad(hexlify(value), 32);
                };
                values.forEach(function(value, index) {
                    var param = eventFragment.inputs[index];
                    if (!param.indexed) {
                        if (value != null) {
                            logger10.throwArgumentError("cannot filter non-indexed parameters; must be null", "contract." + param.name, value);
                        }
                        return;
                    }
                    if (value == null) {
                        topics.push(null);
                    } else if (param.baseType === "array" || param.baseType === "tuple") {
                        logger10.throwArgumentError("filtering with tuples or arrays not supported", "contract." + param.name, value);
                    } else if (Array.isArray(value)) {
                        topics.push(value.map(function(value2) {
                            return encodeTopic(param, value2);
                        }));
                    } else {
                        topics.push(encodeTopic(param, value));
                    }
                });
                while(topics.length && topics[topics.length - 1] === null){
                    topics.pop();
                }
                return topics;
            }
        },
        {
            key: "encodeEventLog",
            value: function encodeEventLog(eventFragment, values) {
                var _this = this;
                if (typeof eventFragment === "string") {
                    eventFragment = this.getEvent(eventFragment);
                }
                var topics = [];
                var dataTypes = [];
                var dataValues = [];
                if (!eventFragment.anonymous) {
                    topics.push(this.getEventTopic(eventFragment));
                }
                if (values.length !== eventFragment.inputs.length) {
                    logger10.throwArgumentError("event arguments/values mismatch", "values", values);
                }
                eventFragment.inputs.forEach(function(param, index) {
                    var value = values[index];
                    if (param.indexed) {
                        if (param.type === "string") {
                            topics.push(id(value));
                        } else if (param.type === "bytes") {
                            topics.push(keccak256(value));
                        } else if (param.baseType === "tuple" || param.baseType === "array") {
                            throw new Error("not implemented");
                        } else {
                            topics.push(_this._abiCoder.encode([
                                param.type
                            ], [
                                value
                            ]));
                        }
                    } else {
                        dataTypes.push(param);
                        dataValues.push(value);
                    }
                });
                return {
                    data: this._abiCoder.encode(dataTypes, dataValues),
                    topics: topics
                };
            }
        },
        {
            // Decode a filter for the event and the search criteria
            key: "decodeEventLog",
            value: function decodeEventLog(eventFragment, data, topics) {
                var _loop = function(i) {
                    var value = result[i];
                    if (_instanceof(value, Error)) {
                        Object.defineProperty(result, i, {
                            enumerable: true,
                            get: function() {
                                throw wrapAccessError("index ".concat(i), value);
                            }
                        });
                    }
                };
                if (typeof eventFragment === "string") {
                    eventFragment = this.getEvent(eventFragment);
                }
                if (topics != null && !eventFragment.anonymous) {
                    var topicHash = this.getEventTopic(eventFragment);
                    if (!isHexString(topics[0], 32) || topics[0].toLowerCase() !== topicHash) {
                        logger10.throwError("fragment/topic mismatch", Logger.errors.INVALID_ARGUMENT, {
                            argument: "topics[0]",
                            expected: topicHash,
                            value: topics[0]
                        });
                    }
                    topics = topics.slice(1);
                }
                var indexed = [];
                var nonIndexed = [];
                var dynamic = [];
                eventFragment.inputs.forEach(function(param, index) {
                    if (param.indexed) {
                        if (param.type === "string" || param.type === "bytes" || param.baseType === "tuple" || param.baseType === "array") {
                            indexed.push(ParamType.fromObject({
                                type: "bytes32",
                                name: param.name
                            }));
                            dynamic.push(true);
                        } else {
                            indexed.push(param);
                            dynamic.push(false);
                        }
                    } else {
                        nonIndexed.push(param);
                        dynamic.push(false);
                    }
                });
                var resultIndexed = topics != null ? this._abiCoder.decode(indexed, concat(topics)) : null;
                var resultNonIndexed = this._abiCoder.decode(nonIndexed, data, true);
                var result = [];
                var nonIndexedIndex = 0, indexedIndex = 0;
                eventFragment.inputs.forEach(function(param, index) {
                    if (param.indexed) {
                        if (resultIndexed == null) {
                            result[index] = new Indexed({
                                _isIndexed: true,
                                hash: null
                            });
                        } else if (dynamic[index]) {
                            result[index] = new Indexed({
                                _isIndexed: true,
                                hash: resultIndexed[indexedIndex++]
                            });
                        } else {
                            try {
                                result[index] = resultIndexed[indexedIndex++];
                            } catch (error) {
                                result[index] = error;
                            }
                        }
                    } else {
                        try {
                            result[index] = resultNonIndexed[nonIndexedIndex++];
                        } catch (error) {
                            result[index] = error;
                        }
                    }
                    if (param.name && result[param.name] == null) {
                        var value = result[index];
                        if (_instanceof(value, Error)) {
                            Object.defineProperty(result, param.name, {
                                enumerable: true,
                                get: function() {
                                    throw wrapAccessError("property ".concat(JSON.stringify(param.name)), value);
                                }
                            });
                        } else {
                            result[param.name] = value;
                        }
                    }
                });
                for(var i = 0; i < result.length; i++)_loop(i);
                return Object.freeze(result);
            }
        },
        {
            // Given a transaction, find the matching function fragment (if any) and
            // determine all its properties and call parameters
            key: "parseTransaction",
            value: function parseTransaction(tx) {
                var fragment = this.getFunction(tx.data.substring(0, 10).toLowerCase());
                if (!fragment) {
                    return null;
                }
                return new TransactionDescription({
                    args: this._abiCoder.decode(fragment.inputs, "0x" + tx.data.substring(10)),
                    functionFragment: fragment,
                    name: fragment.name,
                    signature: fragment.format(),
                    sighash: this.getSighash(fragment),
                    value: BigNumber.from(tx.value || "0")
                });
            }
        },
        {
            // @TODO
            //parseCallResult(data: BytesLike): ??
            // Given an event log, find the matching event fragment (if any) and
            // determine all its properties and values
            key: "parseLog",
            value: function parseLog(log) {
                var fragment = this.getEvent(log.topics[0]);
                if (!fragment || fragment.anonymous) {
                    return null;
                }
                return new LogDescription({
                    eventFragment: fragment,
                    name: fragment.name,
                    signature: fragment.format(),
                    topic: this.getEventTopic(fragment),
                    args: this.decodeEventLog(fragment, log.data, log.topics)
                });
            }
        },
        {
            key: "parseError",
            value: function parseError(data) {
                var hexData = hexlify(data);
                var fragment = this.getError(hexData.substring(0, 10).toLowerCase());
                if (!fragment) {
                    return null;
                }
                return new ErrorDescription({
                    args: this._abiCoder.decode(fragment.inputs, "0x" + hexData.substring(10)),
                    errorFragment: fragment,
                    name: fragment.name,
                    signature: fragment.format(),
                    sighash: this.getSighash(fragment)
                });
            }
        }
    ], [
        {
            key: "getAbiCoder",
            value: // Sub-classes can override these to handle other blockchains
            function getAbiCoder() {
                return defaultAbiCoder;
            }
        },
        {
            key: "getAddress",
            value: function getAddress1(address) {
                return getAddress(address);
            }
        },
        {
            key: "getSighash",
            value: function getSighash(fragment) {
                return hexDataSlice(id(fragment.format()), 0, 4);
            }
        },
        {
            key: "getEventTopic",
            value: function getEventTopic(eventFragment) {
                return id(eventFragment.format());
            }
        },
        {
            key: "isInterface",
            value: /*
  static from(value: Array<Fragment | string | JsonAbi> | string | Interface) {
      if (Interface.isInterface(value)) {
          return value;
      }
      if (typeof(value) === "string") {
          return new Interface(JSON.parse(value));
      }
      return new Interface(value);
  }
  */ function isInterface(value) {
                return !!(value && value._isInterface);
            }
        }
    ]);
    return Interface;
}();
// src/testing-utils/contract-utils.ts
var ContractUtils = /*#__PURE__*/ function() {
    function ContractUtils(mockManager, ethTestingProviderType, abi, address) {
        _classCallCheck(this, ContractUtils);
        this.mockManager = mockManager;
        this.contractInterface = new Interface(abi);
        this.address = address;
        this.ethTestingProviderType = ethTestingProviderType;
        this.conditionCache = {};
    }
    _createClass(ContractUtils, [
        {
            /**
   * Mock a call of the contract
   * @param functionName Name of the function
   * @param values Array of values to be returned or function resolving/returning the array of values to be returned - array is used as ordering of the returned data
   * @param callOptions.callValues Optional array of values passed to the call - useful when dealing with multiple similar calls with different arguments
   * @param callOptions.contractAddress Optional address of the contract, fallbacks to the contract address of the utils if specified
   * @param mockOptions.persistent If true, the mock will persist
   * @param mockOptions.shouldThrow If true, the mocked request will throw, the thrown error is the data field
   * @param mockOptions.timeout Timeout of the request, in milliseconds
   * @param mockOptions.condition Specific condition function for the mock, a conditional mock has priority over standard mocks. Signature is `(params: unknown[]) => boolean`
   * @param mockOptions.triggerCallback Callback that is triggered when the mock has been consumed. Signature is `(data?: unknown, params?: unknown[]) => void`
   * @example ```ts
   * // Mock next call to `value` function with return value `12`
   * contractUtils.mockCall("value", ["12"]);
   * // Mock next call to `value` function with return value `12`
   * contractUtils.mockCall("value", async () => {doSomething(); return ["12"];});
   * ```
   */ key: "mockCall",
            value: function mockCall(functionName, values) {
                var callOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, mockOptions = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
                var _this = this;
                var contractAddress = callOptions.contractAddress, callValues = callOptions.callValues;
                var toAddress = contractAddress || this.address;
                var conditionKey = JSON.stringify({
                    functionName: functionName,
                    to: toAddress,
                    callValues: callValues
                });
                var condition;
                var conditionFromCache = this.conditionCache[conditionKey];
                if (Boolean(conditionFromCache)) {
                    condition = conditionFromCache;
                } else {
                    condition = function(params) {
                        var ethCallParams = params;
                        var _ethCallParams_ = ethCallParams[0], to = _ethCallParams_.to, data = _ethCallParams_.data;
                        var isTargetedContract = toAddress ? toAddress.toLowerCase() === to.toLowerCase() : true;
                        var isTargetedFunction = callValues ? data === _this.contractInterface.encodeFunctionData(functionName, callValues) : data.startsWith(_this.contractInterface.getSighash(functionName));
                        return isTargetedContract && isTargetedFunction;
                    };
                    this.conditionCache[conditionKey] = condition;
                }
                var _this1 = this;
                var deriveCallResult = function() {
                    var _ref = _asyncToGenerator(function(params) {
                        var functionValues;
                        return __generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!(typeof values === "function")) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        values(params)
                                    ];
                                case 1:
                                    functionValues = _state.sent();
                                    return [
                                        3,
                                        3
                                    ];
                                case 2:
                                    functionValues = values;
                                    _state.label = 3;
                                case 3:
                                    return [
                                        2,
                                        _this1.contractInterface.encodeFunctionResult(functionName, functionValues)
                                    ];
                            }
                        });
                    });
                    return function deriveCallResult(params) {
                        return _ref.apply(this, arguments);
                    };
                }();
                this.mockManager.mockRequest("eth_call", deriveCallResult, _objectSpread({
                    condition: condition
                }, mockOptions));
                return this;
            }
        },
        {
            /**
   * Mock a transaction of the contract
   * @param functionName Name of the function
   * @param txOptions.from Optional address of the sender, fallbacks to the current mocked account
   * @param txOptions.to Optional address of the recipient, fallbacks to the contract address of the utils if specified
   * @param txOptions.contractAddress Optional contract address address of the receipt, fallbacks to the contract address of the utils if specified
   * @param txOptions.txValues Optional array of values passed to the transaction - useful when dealing with multiple similar calls with different arguments
   * @param mockOptions.persistent If true, the mock will persist
   * @param mockOptions.shouldThrow If true, the mocked request will throw, the thrown error is the data field
   * @param mockOptions.timeout Timeout of the request, in milliseconds
   * @param mockOptions.condition Specific condition function for the mock, a conditional mock has priority over standard mocks. Signature is `(params: unknown[]) => boolean`
   * @param mockOptions.triggerCallback Callback that is triggered when the mock has been consumed. Signature is `(data?: unknown, params?: unknown[]) => void`
   * @example ```ts
   * // Mock next transaction using `setValue` method
   * contractUtils.mockTransaction("setValue");
   * ```
   */ key: "mockTransaction",
            value: function mockTransaction(functionName) {
                var txOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, mockOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                var _this = this;
                var chainIdMock = this.mockManager.findUnconditionalPersistentMock("eth_chainId");
                if (!chainIdMock) {
                    throw new Error("Unable to properly mock transaction because chain ID mock has not been properly set up.");
                }
                var isWalletProvider = this.ethTestingProviderType === "MetaMask" || this.ethTestingProviderType === "Coinbase" || this.ethTestingProviderType === "WalletConnect";
                if (isWalletProvider) {
                    var accountMock = this.mockManager.findUnconditionalPersistentMock("eth_accounts");
                    if (!accountMock) {
                        throw new Error("Unable to properly mock transaction because account mock has not been properly set up.");
                    }
                    var txValues = txOptions.txValues, from = txOptions.from, to = txOptions.to, contractAddressInput = txOptions.contractAddress;
                    var blockNumberMock = this.mockManager.findUnconditionalPersistentMock("eth_blockNumber");
                    if (!blockNumberMock) {
                        throw new Error("Unable to properly mock transaction because block number mock has not been properly set up.");
                    }
                    var blockNumber = blockNumberMock.data;
                    var _accountMock_data = _slicedToArray(accountMock.data, 1), mockedAccount = _accountMock_data[0];
                    var fromAddress = from || mockedAccount;
                    var toAddress = to || this.address;
                    var contractAddress = contractAddressInput || toAddress;
                    var conditionKey = JSON.stringify({
                        functionName: functionName,
                        to: toAddress,
                        from: fromAddress,
                        contractAddress: contractAddress,
                        txValues: txValues
                    });
                    var condition;
                    var conditionFromCache = this.conditionCache[conditionKey];
                    if (Boolean(conditionFromCache)) {
                        condition = conditionFromCache;
                    } else {
                        condition = function(params) {
                            var estimateGasOrSendTransactionParams = params;
                            var _estimateGasOrSendTransactionParams_ = estimateGasOrSendTransactionParams[0], from2 = _estimateGasOrSendTransactionParams_.from, to2 = _estimateGasOrSendTransactionParams_.to, data = _estimateGasOrSendTransactionParams_.data;
                            var isTargetedFunction = txValues ? data === _this.contractInterface.encodeFunctionData(functionName, txValues) : data.startsWith(_this.contractInterface.getSighash(functionName));
                            var isTargetedContract = toAddress ? toAddress.toLowerCase() === to2.toLowerCase() : true;
                            return from2.toLowerCase() === fromAddress.toLowerCase() && isTargetedContract && isTargetedFunction;
                        };
                        this.conditionCache[conditionKey] = condition;
                    }
                    var gasEstimation = "0x0000000000000000000000000000000000000000000000000000000000010000";
                    this.mockManager.mockRequest("eth_estimateGas", gasEstimation, {
                        condition: condition
                    });
                    var txHash = "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c";
                    this.mockManager.mockRequest("eth_sendTransaction", txHash, _objectSpread({
                        condition: condition
                    }, mockOptions));
                    var txData = txValues ? this.contractInterface.encodeFunctionData(functionName, txValues) : "0x55241077000000000000000000000000000000000000000000000000000000000000007b";
                    var tx = {
                        to: toAddress,
                        from: fromAddress,
                        input: txData,
                        chainId: "0x1",
                        hash: txHash,
                        nonce: "0x1",
                        gasLimit: BigNumber.from(1).toHexString(),
                        value: BigNumber.from(0).toHexString(),
                        r: "0x",
                        s: "0x",
                        v: "0x",
                        type: "0x1",
                        transactionIndex: "0x1"
                    };
                    var getTxCondition = function(params) {
                        var getTxByHashParams = params;
                        var hash = getTxByHashParams[0];
                        return hash === txHash;
                    };
                    this.mockManager.mockRequest("eth_getTransactionByHash", tx, {
                        condition: getTxCondition
                    });
                    var blockHash = "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c";
                    var defaultContractAddress = "0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf";
                    var txReceipt = {
                        to: toAddress || defaultContractAddress,
                        from: fromAddress,
                        contractAddress: contractAddress || defaultContractAddress,
                        transactionIndex: "0x1",
                        gasUsed: BigNumber.from(1).toHexString(),
                        logsBloom: "",
                        blockHash: blockHash,
                        transactionHash: txHash,
                        logs: [],
                        blockNumber: blockNumber,
                        confirmations: "0x1",
                        cumulativeGasUsed: BigNumber.from(1).toHexString(),
                        effectiveGasPrice: BigNumber.from(1).toHexString(),
                        type: "0x1"
                    };
                    this.mockManager.mockRequest("eth_getTransactionReceipt", txReceipt, {
                        condition: getTxCondition
                    });
                } else {
                    this.mockManager.mockRequest("eth_gasPrice", "0x012a05f200");
                    this.mockManager.mockRequest("eth_getBlockByNumber", {
                        number: "0x01",
                        hash: "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c",
                        parentHash: "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c",
                        nonce: "0x01",
                        sha3Uncle: "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c",
                        logsBloom: "0xccb043516160700413c057c48562f314184b32138a8640044000ce0aa63a1de61f045919900327524180789a03158f5413118b898c9ebc204730e81022e5459082c0000841c9823cc90a4d1f2370492054013424c7c412207b1f3c46895415d45232a4213a3985c01440e8800810e81274ca20142a414d80d131259a80180c306805b1880f1b36041418870081a23d0c46240599d122034985a3b746005440b55a82cf191b802d42045c88ed460898a0c0f083a82cab080ed1282c4298c89522437d666204a05a3a42224b1444b125d5006026d82432451e26c1b1120e28e9b85433a63d60184e018c8095b00201180412715a063043d9c1a20b059d5031183c",
                        transactionsRoot: "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c",
                        stateRoot: "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c",
                        receiptsRoot: "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c",
                        miner: "0x8B4de256180CFEC54c436A470AF50F9EE2813dbB",
                        difficulty: "0x012a05f200",
                        totalDifficulty: "0x012a05f200",
                        extraData: "0x012a05f200",
                        size: "0x012a05f200",
                        gasLimit: "0xffffffffff",
                        gasUsed: "0x012a05f200",
                        baseFeePerGas: "0x012a05f200",
                        timestamp: "0x10",
                        transactions: [],
                        uncles: []
                    });
                    this.mockManager.mockRequest("eth_getTransactionCount", "0x01");
                    this.mockManager.mockRequest("eth_estimateGas", "0x0000000000000000000000000000000000000000000000000000000000010000");
                    var blockHash1 = "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c";
                    var defaultContractAddress1 = "0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf";
                    this.mockManager.mockRequest("eth_sendRawTransaction", null);
                    this.mockManager.mockRequest("eth_getTransactionReceipt", function(data) {
                        var _data = _slicedToArray(data, 1), txHash = _data[0];
                        return {
                            to: txOptions.to || _this.address || defaultContractAddress1,
                            from: txOptions.from || defaultContractAddress1,
                            contractAddress: txOptions.contractAddress || txOptions.to || _this.address || defaultContractAddress1,
                            transactionIndex: "0x1",
                            gasUsed: import_ethers.ethers.BigNumber.from(1).toHexString(),
                            logsBloom: "",
                            blockHash: blockHash1,
                            transactionHash: txHash,
                            logs: [],
                            blockNumber: "0x02",
                            confirmations: "0x1",
                            cumulativeGasUsed: import_ethers.ethers.BigNumber.from(1).toHexString(),
                            effectiveGasPrice: import_ethers.ethers.BigNumber.from(1).toHexString(),
                            type: "0x1"
                        };
                    }, mockOptions);
                }
                return this;
            }
        },
        {
            /**
   * Mock the next past logs request with an array of a single event type
   * @param eventName Name of the event
   * @param allValues Array of array of values of the events
   * @example ```ts
   * // Mock for two events `event ValueUpdated(uint value)` with values `0` and `12`
   * contractTestingUtils.mockGetLogs("ValueUpdated", [["0"], ["12"]]);
   * ```
   */ key: "mockGetLogs",
            value: function mockGetLogs(eventName, allValues) {
                var _this = this;
                var blockNumberMock = this.mockManager.findUnconditionalPersistentMock("eth_blockNumber");
                if (!blockNumberMock) {
                    throw new Error("Unable to properly mock transaction because block number mock has not been properly set up.");
                }
                var blockNumber = blockNumberMock.data;
                var eventTopic = this.contractInterface.getEventTopic(this.contractInterface.getEvent(eventName));
                var condition = function(params) {
                    var _filter_topics;
                    var filter = params[0];
                    return (filter === null || filter === void 0 ? void 0 : (_filter_topics = filter.topics) === null || _filter_topics === void 0 ? void 0 : _filter_topics[0]) === eventTopic;
                };
                this.mockManager.mockRequest("eth_getLogs", allValues.map(function(values) {
                    return _this.generateMockLog(eventName, values, {
                        blockNumber: blockNumber
                    });
                }), {
                    condition: condition
                });
                return this;
            }
        },
        {
            /**
   * Mock an emission of a log, mocked block number is automatically increased
   * @param eventName Name of the event
   * @param values array of values of the event
   * @param subscriptionId Needed if using web3.js
   * @param logOverrides Optional overrides for the log
   * @example ```ts
   * // Mock emission of a log for `event ValueUpdated(uint value)` with value `12`
   * ...
   * // With ethers
   * contractTestingUtils.mockEmitLog("ValueUpdated", ["12"]);
   * // With web3.js
   * testingUtils.mockSubscribe("0x123");
   * ...
   * contractTestingUtils.mockEmitLog("ValueUpdated", ["12"], "0x123");
   * ```
   */ key: "mockEmitLog",
            value: function mockEmitLog(eventName, values, subscriptionId, logOverrides) {
                var blockNumberMock = this.mockManager.findUnconditionalPersistentMock("eth_blockNumber");
                if (!blockNumberMock) {
                    throw new Error("Unable to properly mock transaction because block number mock has not been properly set up.");
                }
                var blockNumber = blockNumberMock.data;
                var incrementedBlockNumber = Number(blockNumber) + 1;
                var hexValue = import_ethers.ethers.utils.hexValue(incrementedBlockNumber);
                var zeroPadIncrementedBlockNumber = import_ethers.ethers.utils.hexZeroPad(hexValue, 32);
                this.mockManager.mockRequest("eth_blockNumber", zeroPadIncrementedBlockNumber, {
                    persistent: true
                });
                var log = this.generateMockLog(eventName, values, _objectSpread({
                    blockNumber: "0x".concat(incrementedBlockNumber.toString(16))
                }, logOverrides));
                if (subscriptionId) {
                    this.mockManager.emit("message", {
                        type: "eth_subscription",
                        data: {
                            subscription: subscriptionId,
                            result: log
                        }
                    });
                } else {
                    var eventTopic = this.contractInterface.getEventTopic(this.contractInterface.getEvent(eventName));
                    var condition = function(params) {
                        var _filter_topics;
                        var filter = params[0];
                        return (filter === null || filter === void 0 ? void 0 : (_filter_topics = filter.topics) === null || _filter_topics === void 0 ? void 0 : _filter_topics[0]) === eventTopic;
                    };
                    this.mockManager.mockRequest("eth_getLogs", [
                        log
                    ], {
                        condition: condition
                    });
                    var address = this.address || (logOverrides === null || logOverrides === void 0 ? void 0 : logOverrides.address);
                    var filters = {
                        address: address,
                        topics: this.contractInterface.encodeFilterTopics(this.contractInterface.getEvent(eventName), [])
                    };
                    this.mockManager.emit(JSON.stringify(filters), log);
                }
                return this;
            }
        },
        {
            /**
   * Generate a log from an event name and the values of the event
   * @param eventName Name of the event
   * @param values Array of values of the event
   * @param logOverrides Optional overrides for the log
   * @example ```ts
   * // Generate a log for `event ValueUpdated(uint value)` with value `12`
   * const log = contractTestingUtils.generateMockLog("ValueUpdated", ["12"]);
   * ```
   * @returns The log for the event
   */ key: "generateMockLog",
            value: function generateMockLog(eventName, values, logOverrides) {
                var defaultContractAddress = "0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf";
                var address = this.address || defaultContractAddress;
                var _this_contractInterface_encodeEventLog = this.contractInterface.encodeEventLog(this.contractInterface.getEvent(eventName), values), data = _this_contractInterface_encodeEventLog.data, topics = _this_contractInterface_encodeEventLog.topics;
                return _objectSpread({
                    blockNumber: "0x1",
                    blockHash: "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c",
                    transactionIndex: "0x0",
                    removed: false,
                    address: address,
                    data: data,
                    topics: topics,
                    transactionHash: "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c",
                    logIndex: "0x0"
                }, logOverrides);
            }
        }
    ]);
    return ContractUtils;
}();
// src/testing-utils/testing-utils.ts
var import_ethers3 = require("ethers");
// src/mock-manager.ts
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
// src/testing-utils/ens-utils/index.ts
var import_ethers2 = require("ethers");
// src/testing-utils/ens-utils/constants.ts
var ENS_REGISTRY_WITH_FALLBACK_ADDRESS = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
var PUBLIC_RESOLVER_ADDRESS = "0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41";
var ENS_REGISTRY_WITH_FALLBACK_ABI = [
    {
        inputs: [
            {
                internalType: "contract ENS",
                name: "_old",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool"
            }
        ],
        name: "ApprovalForAll",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "label",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "NewOwner",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "address",
                name: "resolver",
                type: "address"
            }
        ],
        name: "NewResolver",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "ttl",
                type: "uint64"
            }
        ],
        name: "NewTTL",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "Transfer",
        type: "event"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "address",
                name: "operator",
                type: "address"
            }
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "old",
        outputs: [
            {
                internalType: "contract ENS",
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            }
        ],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            }
        ],
        name: "recordExists",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            }
        ],
        name: "resolver",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address"
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool"
            }
        ],
        name: "setApprovalForAll",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "setOwner",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address"
            },
            {
                internalType: "uint64",
                name: "ttl",
                type: "uint64"
            }
        ],
        name: "setRecord",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address"
            }
        ],
        name: "setResolver",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "label",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "setSubnodeOwner",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "label",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address"
            },
            {
                internalType: "uint64",
                name: "ttl",
                type: "uint64"
            }
        ],
        name: "setSubnodeRecord",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "uint64",
                name: "ttl",
                type: "uint64"
            }
        ],
        name: "setTTL",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            }
        ],
        name: "ttl",
        outputs: [
            {
                internalType: "uint64",
                name: "",
                type: "uint64"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    }
];
var PUBLIC_RESOLVER_ABI = [
    {
        inputs: [
            {
                internalType: "contract ENS",
                name: "_ens",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "contentType",
                type: "uint256"
            }
        ],
        name: "ABIChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "address",
                name: "a",
                type: "address"
            }
        ],
        name: "AddrChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "coinType",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "newAddress",
                type: "bytes"
            }
        ],
        name: "AddressChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "target",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bool",
                name: "isAuthorised",
                type: "bool"
            }
        ],
        name: "AuthorisationChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "hash",
                type: "bytes"
            }
        ],
        name: "ContenthashChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "name",
                type: "bytes"
            },
            {
                indexed: false,
                internalType: "uint16",
                name: "resource",
                type: "uint16"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "record",
                type: "bytes"
            }
        ],
        name: "DNSRecordChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "name",
                type: "bytes"
            },
            {
                indexed: false,
                internalType: "uint16",
                name: "resource",
                type: "uint16"
            }
        ],
        name: "DNSRecordDeleted",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            }
        ],
        name: "DNSZoneCleared",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "bytes4",
                name: "interfaceID",
                type: "bytes4"
            },
            {
                indexed: false,
                internalType: "address",
                name: "implementer",
                type: "address"
            }
        ],
        name: "InterfaceChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "string",
                name: "name",
                type: "string"
            }
        ],
        name: "NameChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "x",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "y",
                type: "bytes32"
            }
        ],
        name: "PubkeyChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "string",
                name: "indexedKey",
                type: "string"
            },
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string"
            }
        ],
        name: "TextChanged",
        type: "event"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "contentTypes",
                type: "uint256"
            }
        ],
        name: "ABI",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            }
        ],
        name: "addr",
        outputs: [
            {
                internalType: "address payable",
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "coinType",
                type: "uint256"
            }
        ],
        name: "addr",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "authorisations",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            }
        ],
        name: "clearDNSZone",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            }
        ],
        name: "contenthash",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "name",
                type: "bytes32"
            },
            {
                internalType: "uint16",
                name: "resource",
                type: "uint16"
            }
        ],
        name: "dnsRecord",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "name",
                type: "bytes32"
            }
        ],
        name: "hasDNSRecords",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "bytes4",
                name: "interfaceID",
                type: "bytes4"
            }
        ],
        name: "interfaceImplementer",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]"
            }
        ],
        name: "multicall",
        outputs: [
            {
                internalType: "bytes[]",
                name: "results",
                type: "bytes[]"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            }
        ],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            }
        ],
        name: "pubkey",
        outputs: [
            {
                internalType: "bytes32",
                name: "x",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "y",
                type: "bytes32"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "contentType",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }
        ],
        name: "setABI",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "coinType",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "a",
                type: "bytes"
            }
        ],
        name: "setAddr",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "a",
                type: "address"
            }
        ],
        name: "setAddr",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "target",
                type: "address"
            },
            {
                internalType: "bool",
                name: "isAuthorised",
                type: "bool"
            }
        ],
        name: "setAuthorisation",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "bytes",
                name: "hash",
                type: "bytes"
            }
        ],
        name: "setContenthash",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }
        ],
        name: "setDNSRecords",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "bytes4",
                name: "interfaceID",
                type: "bytes4"
            },
            {
                internalType: "address",
                name: "implementer",
                type: "address"
            }
        ],
        name: "setInterface",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "string",
                name: "name",
                type: "string"
            }
        ],
        name: "setName",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "x",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "y",
                type: "bytes32"
            }
        ],
        name: "setPubkey",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "string",
                name: "key",
                type: "string"
            },
            {
                internalType: "string",
                name: "value",
                type: "string"
            }
        ],
        name: "setText",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceID",
                type: "bytes4"
            }
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "pure",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "string",
                name: "key",
                type: "string"
            }
        ],
        name: "text",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    }
];
// src/testing-utils/ens-utils/index.ts
var EnsUtils = /*#__PURE__*/ function() {
    function EnsUtils(mockManager, providerType) {
        _classCallCheck(this, EnsUtils);
        this.ensRegistryWithFallbackUtils = new ContractUtils(mockManager, providerType, ENS_REGISTRY_WITH_FALLBACK_ABI, ENS_REGISTRY_WITH_FALLBACK_ADDRESS);
        this.publicResolverUtils = new ContractUtils(mockManager, providerType, PUBLIC_RESOLVER_ABI, PUBLIC_RESOLVER_ADDRESS);
    }
    _createClass(EnsUtils, [
        {
            /**
   * Mock the resolver address of a name
   * @param name ENS name
   * @param resolverAddress Resolver address, fallback to the main net public resolver
   * @example ```ts
   * ens.mockResolver("blabla.eth");
   * ```
   */ key: "mockResolver",
            value: function mockResolver(name) {
                var resolverAddress = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : PUBLIC_RESOLVER_ADDRESS;
                var callValues = name ? {
                    callValues: [
                        import_ethers2.ethers.utils.namehash(name)
                    ]
                } : void 0;
                this.ensRegistryWithFallbackUtils.mockCall("resolver", [
                    resolverAddress
                ], callValues, {
                    persistent: true
                });
                return this;
            }
        },
        {
            /**
   * Mock all addresses to resolve to empty names and names to zero address
   * @example ```ts
   * ens.mockAllToEmpty();
   * ```
   */ key: "mockAllToEmpty",
            value: function mockAllToEmpty() {
                this.mockResolver();
                this.publicResolverUtils.mockCall("supportsInterface", [
                    false
                ], void 0, {
                    persistent: true
                });
                this.publicResolverUtils.mockCall("name", [
                    ""
                ], void 0, {
                    persistent: true
                });
                this.publicResolverUtils.mockCall("addr(bytes32)", [
                    import_ethers2.ethers.constants.AddressZero
                ], void 0, {
                    persistent: true
                });
            }
        },
        {
            /**
   * Mock empty reverse resolution of a batch of addresses
   * @param addresses Array of address
   * @example ```ts
   * ens.mockEmptyReverse(["0x123...", "0x456..."]);
   * ```
   */ key: "mockEmptyReverse",
            value: function mockEmptyReverse(addresses) {
                var _this = this;
                this.publicResolverUtils.mockCall("supportsInterface", [
                    false
                ], void 0, {
                    persistent: true
                });
                addresses.forEach(function(address) {
                    var reverseName = address.substring(2).toLowerCase() + ".addr.reverse";
                    _this.mockResolver(reverseName, import_ethers2.ethers.constants.AddressZero);
                    var callValues = {
                        callValues: [
                            import_ethers2.ethers.utils.namehash(reverseName)
                        ]
                    };
                    _this.publicResolverUtils.mockCall("name", [
                        ""
                    ], callValues, {
                        persistent: true
                    });
                });
            }
        },
        {
            /**
   * Mock the resolution of a name to an address
   * @param name ENS name
   * @param address Address
   * @example ```ts
   * ens.mockResolve("blabla.eth", "0x123...");
   * ```
   */ key: "mockResolve",
            value: function mockResolve(name, address) {
                this.mockResolver(name);
                var callValues = {
                    callValues: [
                        import_ethers2.ethers.utils.namehash(name)
                    ]
                };
                this.publicResolverUtils.mockCall("supportsInterface", [
                    false
                ], void 0, {
                    persistent: true
                });
                this.publicResolverUtils.mockCall("addr(bytes32)", [
                    address
                ], callValues, {
                    persistent: true
                });
            }
        },
        {
            /**
   * Mock the reverse resolution of an address to a name
   * @param address Address
   * @param name ENS name
   * @example ```ts
   * ens.mockReverseResolve("0x123...", "blabla.eth");
   * ```
   */ key: "mockReverseResolve",
            value: function mockReverseResolve(address, name) {
                var reverseName = address.substring(2).toLowerCase() + ".addr.reverse";
                this.mockResolver(reverseName);
                this.publicResolverUtils.mockCall("supportsInterface", [
                    false
                ], void 0, {
                    persistent: true
                });
                var callValues = {
                    callValues: [
                        import_ethers2.ethers.utils.namehash(reverseName)
                    ]
                };
                this.publicResolverUtils.mockCall("name", [
                    name
                ], callValues, {
                    persistent: true
                });
            }
        },
        {
            /**
   * Mock a name to resolve to an address and the address to reverse resolve to the name
   * @param address Address
   * @param name ENS name
   * @example ```ts
   * ens.mockName("0x123...", "blabla.eth");
   * ```
   */ key: "mockEnsName",
            value: function mockEnsName(address, name) {
                this.mockResolve(name, address);
                this.mockReverseResolve(address, name);
            }
        }
    ]);
    return EnsUtils;
}();
// src/testing-utils/testing-utils.ts
var defaultMockOptions2 = {};
var LowLevelTestingUtils = /*#__PURE__*/ function() {
    function LowLevelTestingUtils(mockManager) {
        _classCallCheck(this, LowLevelTestingUtils);
        this.mockManager = mockManager;
    }
    _createClass(LowLevelTestingUtils, [
        {
            /**
   * Emits an event
   * @param eventName Name of the event
   * @param payload Payload of the event
   * @example ```ts
   * lowLevelTestingUtils.emit("chainChanged", "0x1");
   * ```
   */ key: "emit",
            value: function emit(eventName, payload) {
                this.mockManager.emit(eventName, payload);
                return this;
            }
        },
        {
            /**
   * Mock a JSON-RPC request
   * @param method JSON-RPC method name
   * @param data Data to be resolved, or function to be called, or error to be thrown in case of throw
   * @param mockOptions.persistent If true, the mock will persist
   * @param mockOptions.shouldThrow If true, the mocked request will throw, the thrown error is the data field
   * @param mockOptions.timeout Timeout of the request, in milliseconds
   * @param mockOptions.condition Specific condition function for the mock, a conditional mock has priority over standard mocks. Signature is `(params: unknown[]) => boolean`
   * @param mockOptions.triggerCallback Callback that is triggered when the mock has been consumed. Signature is `(data?: unknown, params?: unknown[]) => void`
   * @example ```ts
   * // Mock one "eth_accounts" request
   * lowLevelTestingUtils.mockRequest("eth_accounts", ["0x..."]);
   * // Persistently mock "eth_chainId" request
   * lowLevelTestingUtils.mockRequest("eth_chainId", "0x1", { persistent: true });
   * // Mock with a dynamical value based on params
   * // "personal_sign" in this case, `bobsWallet` is externally defined here
   * mockManager.mockRequest("personal_sign", async (params: unknown[]) => {
   *   const statement = (params as string[])[0];
   *   return await bobsWallet.signMessage(statement);
   * });
   * ```
   */ key: "mockRequest",
            value: function mockRequest(method, data) {
                var mockOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultMockOptions2;
                this.mockManager.mockRequest(method, data, mockOptions);
                return this;
            }
        }
    ]);
    return LowLevelTestingUtils;
}();
var TestingUtils = /*#__PURE__*/ function() {
    function TestingUtils(provider) {
        _classCallCheck(this, TestingUtils);
        var mockManager = new MockManager(provider);
        this.provider = provider;
        this.mockManager = mockManager;
        this.lowLevel = new LowLevelTestingUtils(mockManager);
        this.ens = new EnsUtils(mockManager, provider.ethTestingProviderType);
        this.balanceConditionCache = {};
    }
    _createClass(TestingUtils, [
        {
            /**
   * Get the mock provider
   * @returns The mock provider
   */ key: "getProvider",
            value: function getProvider() {
                return this.provider;
            }
        },
        {
            /**
   * Setup mock for a connected wallet: accounts, chain ID and block number are permanently mocked
   * @param accounts The array of accounts
   * @param options.chainId The chain ID, default to "0x1"
   * @param options.blockNumber The block number, default to "0x1"
   * @param options.balance The balance of the first account, default to 0
   * @example ```ts
   * testingUtils.mockConnectedWallet(["0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"]);
   * ```
   */ key: "mockConnectedWallet",
            value: function mockConnectedWallet(accounts) {
                var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref_chainId = _ref.chainId, chainId = _ref_chainId === void 0 ? "0x1" : _ref_chainId, _ref_blockNumber = _ref.blockNumber, blockNumber = _ref_blockNumber === void 0 ? "0x1" : _ref_blockNumber, _ref_balance = _ref.balance, balance = _ref_balance === void 0 ? 0 : _ref_balance;
                this.mockAccounts(accounts);
                this.mockChainId(chainId);
                this.mockBlockNumber(blockNumber);
                if (accounts[0]) {
                    this.mockBalance(accounts[0], balance);
                }
                this.mockRequestAccounts(accounts, {
                    chainId: chainId,
                    blockNumber: blockNumber,
                    balance: balance
                });
                return this;
            }
        },
        {
            /**
   * Setup mock for a readonly provider: chain ID and block number are permanently mocked
   * @param options.chainId The chain ID, default to "0x1"
   * @param options.blockNumber The block number, default to "0x1"
   * @example ```ts
   * testingUtils.mockConnectedWallet(["0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"]);
   * ```
   */ key: "mockReadonlyProvider",
            value: function mockReadonlyProvider() {
                var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref_chainId = _ref.chainId, chainId = _ref_chainId === void 0 ? "0x1" : _ref_chainId, _ref_blockNumber = _ref.blockNumber, blockNumber = _ref_blockNumber === void 0 ? "0x1" : _ref_blockNumber;
                this.mockAccounts([]);
                this.mockChainId(chainId);
                this.mockBlockNumber(blockNumber);
                return this;
            }
        },
        {
            /**
   * Setup mock for a not connected wallet: only the accounts are mocked to an empty array
   */ key: "mockNotConnectedWallet",
            value: function mockNotConnectedWallet() {
                this.mockAccounts([]);
                return this;
            }
        },
        {
            /**
   * Persistently mock the chain ID JSON-RPC request
   * @param chainId The chain ID
   * @example ```ts
   * // Mock chain ID to Ethereum main net
   * testingUtils.mockChainId("0x1");
   * ```
   */ key: "mockChainId",
            value: function mockChainId(chainId) {
                var hexValue = import_ethers3.ethers.utils.hexValue(chainId);
                this.mockManager.mockRequest("eth_chainId", hexValue, {
                    persistent: true
                });
                return this;
            }
        },
        {
            /**
   * Persistently mock the block number JSON-RPC request
   * @param blockNumber The block number as a number or a hex string
   * @example ```ts
   * // Using number - mock block number will be return as 0x0000000000000000000000000000000000000000000000000000000000000001
   * testingUtils.mockBlockNumber(1);
   * // Using hex string - mocked block number will be return as 0x0000000000000000000000000000000000000000000000000000000000000001
   * testingUtils.mockBlockNumber('0x1');
   * ```
   */ key: "mockBlockNumber",
            value: function mockBlockNumber(blockNumber) {
                var hexValue = import_ethers3.ethers.utils.hexValue(blockNumber);
                var zeroPadBlockNumber = import_ethers3.ethers.utils.hexZeroPad(hexValue, 32);
                this.mockManager.mockRequest("eth_blockNumber", zeroPadBlockNumber, {
                    persistent: true
                });
                return this;
            }
        },
        {
            /**
   * Persistently mock the accounts JSON-RPC request
   * @param accounts The array of accounts
   * @example ```ts
   * testingUtils.mockAccounts(["0x..."]);
   * ```
   */ key: "mockAccounts",
            value: function mockAccounts(accounts) {
                this.mockManager.mockRequest("eth_accounts", accounts, {
                    persistent: true
                });
                return this;
            }
        },
        {
            /**
   * Persistently mock the balance JSON-RPC request for a specific address
   * @param address Address for which the balance is queried
   * @param balance Balance of the address in Wei
   * @example ```ts
   * // With ethers
   * testingUtils.mockBalance("0x...", ethers.utils.parseUnits("1", "ether").toString())
   * // With web3.js
   * testingUtils.mockBalance("0x...", Web3.utils.toWei("1", "ether"))
   * ```
   */ key: "mockBalance",
            value: function mockBalance(address, balance) {
                var condition;
                var conditionFromCache = this.balanceConditionCache[address];
                if (Boolean(conditionFromCache)) {
                    condition = conditionFromCache;
                } else {
                    condition = function(params) {
                        var _params = _slicedToArray(params, 1), paramAddress = _params[0];
                        return paramAddress.toLowerCase() === address.toLowerCase();
                    };
                    this.balanceConditionCache[address] = condition;
                }
                this.mockManager.mockRequest("eth_getBalance", import_ethers3.ethers.BigNumber.from(balance).toHexString(), {
                    persistent: true,
                    condition: condition
                });
                return this;
            }
        },
        {
            /**
   * Mock a change to a new chain ID by persistently mocking the chain ID JSON-RPC request and emitting a "chainChanged" event
   * @param newChainId The new chain ID
   * @example ```ts
   * // Mock chain changed to Ropsten
   * testingUtils.mockChainChanged("0x3");
   * ```
   */ key: "mockChainChanged",
            value: function mockChainChanged(newChainId) {
                this.mockManager.mockRequest("eth_chainId", newChainId, {
                    persistent: true
                });
                this.mockManager.emit("chainChanged", newChainId);
                return this;
            }
        },
        {
            /**
   * Mock a change to new accounts by persistently mocking the accounts JSON-RPC request and emitting an "accountsChanged" event
   * @param newAccounts The new array of accounts
   * @example ```ts
   * testingUtils.mockAccountsChanged(["0x..."]);
   * ```
   */ key: "mockAccountsChanged",
            value: function mockAccountsChanged(newAccounts) {
                this.mockManager.mockRequest("eth_accounts", newAccounts, {
                    persistent: true
                });
                this.mockManager.emit("accountsChanged", newAccounts);
                return this;
            }
        },
        {
            /**
   * Mock the subscription with a given subscription ID
   * @param subscriptionId The subscription ID as a hex string
   * @example ```ts
   * testingUtils.mockSubscribe("0x123");
   * ...
   * // Log emission using the subscription ID
   * contractTestingUtils.mockEmitLog("ValueUpdated", ["14"], "0x123")
   * ```
   */ key: "mockSubscribe",
            value: function mockSubscribe(subscriptionId) {
                this.mockManager.mockRequest("eth_subscribe", subscriptionId, {
                    persistent: true
                });
                return this;
            }
        },
        {
            /**
   * Mock the next eth_requestAccounts request and persistently mock the accounts once the latter request has been triggered
   * @param accounts Resolved accounts
   * @param options.chainId The mocked value of the chain ID once the request has been triggered, default to "0x1"
   * @param options.blockNumber The mocked value of the block number once the request has been triggered, default to "0x1"
   * @param options.balance The mocked value of the balance of the first account once the request has been triggered, default to 0
   * @param options.triggerCallback Optional additional callback to be triggered with the request. The existing callback will at least mock the eth_accounts
   * @example ```ts
   * // The next eth_requestAccounts request will return the array of address and be set on MainNet
   * testingUtils.mockRequestAccounts(["0x138071e4e810f34265bd833be9c5dd96f01bd8a5"], { chainId: "0x1" });
   * ```
   */ key: "mockRequestAccounts",
            value: function mockRequestAccounts(accounts) {
                var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref_chainId = _ref.chainId, chainId = _ref_chainId === void 0 ? "0x1" : _ref_chainId, _ref_blockNumber = _ref.blockNumber, blockNumber = _ref_blockNumber === void 0 ? "0x1" : _ref_blockNumber, _ref_balance = _ref.balance, balance = _ref_balance === void 0 ? 0 : _ref_balance, triggerCallback = _ref.triggerCallback;
                var _this = this;
                var completedTriggerCallback = function() {
                    _this.mockConnectedWallet(accounts, {
                        chainId: chainId,
                        blockNumber: blockNumber,
                        balance: balance
                    });
                    if (triggerCallback) triggerCallback();
                };
                this.mockManager.mockRequest("eth_requestAccounts", accounts, {
                    triggerCallback: completedTriggerCallback
                });
                return this;
            }
        },
        {
            /**
   * Generate contract specific testing utils
   * @param abi ABI of the contract
   * @param contractAddress Address of the contract
   * @returns The testing utils for this specific contract
   * @example ```ts
   * const ERC20_ABI = [...];
   * const erc20TestingUtils = testingUtils.generateContractUtils(ERC20_ABI);
   * ```
   */ key: "generateContractUtils",
            value: function generateContractUtils(abi, contractAddress) {
                return new ContractUtils(this.mockManager, this.provider.ethTestingProviderType, abi, contractAddress);
            }
        },
        {
            /**
   * Clear all mocks
   */ key: "clearAllMocks",
            value: function clearAllMocks() {
                this.mockManager.clearAllMocks();
                return this;
            }
        }
    ]);
    return TestingUtils;
}();
// src/setup.ts
var defaultGenerationOptions = {
    providerType: "default",
    verbose: false
};
function generateTestingUtils() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultGenerationOptions, providerType = _ref.providerType, verbose = _ref.verbose;
    var provider = providerType === "MetaMask" ? new MetaMaskProvider({
        verbose: verbose
    }) : providerType === "Coinbase" ? new CoinbaseProvider({
        verbose: verbose
    }) : providerType === "WalletConnect" ? new WalletConnectProvider({
        verbose: verbose
    }) : new Provider({
        verbose: verbose,
        ethTestingProviderType: "default"
    });
    var testingUtils = new TestingUtils(provider);
    return testingUtils;
}
// src/__tests__/internal-event.test.ts
describe("internal events handling", function() {
    test("subscriber callbacks should be triggered when associated event is received", function() {
        var testingUtils = generateTestingUtils();
        var provider = testingUtils.getProvider();
        var firstCallback = jest.fn();
        var secondCallback = jest.fn();
        provider.on("test-event", firstCallback);
        provider.on("test-event", secondCallback);
        testingUtils.lowLevel.emit("test-event", {
            a: 1
        });
        expect(firstCallback).toHaveBeenCalledTimes(1);
        expect(firstCallback).toHaveBeenCalledWith({
            a: 1
        });
        expect(secondCallback).toHaveBeenCalledTimes(1);
        expect(secondCallback).toHaveBeenCalledWith({
            a: 1
        });
        provider.removeListener("test-event", secondCallback);
        testingUtils.lowLevel.emit("test-event", {
            a: 2
        });
        expect(firstCallback).toHaveBeenCalledTimes(2);
        expect(firstCallback).toHaveBeenCalledWith({
            a: 2
        });
        expect(secondCallback).toHaveBeenCalledTimes(1);
    });
}); /*! Bundled license information:

js-sha3/src/sha3.js:
  (**
   * [js-sha3]{@link https://github.com/emn178/js-sha3}
   *
   * @version 0.8.0
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2015-2018
   * @license MIT
   *)
*/ 
