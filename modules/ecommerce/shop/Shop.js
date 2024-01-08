"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _gridList = _interopRequireDefault(require("../../video/player/gridList"));
var _ShopModule = _interopRequireDefault(require("./Shop.module.scss"));
var _ProductImageManagerModule = _interopRequireDefault(require("../product/ProductImageManager.module.scss"));
var _util = require("../../util");
var _uuid = require("uuid");
var _AllInclusive = _interopRequireDefault(require("@mui/icons-material/AllInclusive"));
var _ConfirmationNumber = _interopRequireDefault(require("@mui/icons-material/ConfirmationNumber"));
var _Stadium = _interopRequireDefault(require("@mui/icons-material/Stadium"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _ecommerce = require("../../utility/ecommerce");
var _product = require("../product");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var defaultEditingOptionsMeta = {
  productType: 'virtual',
  ticket: false,
  livestream: false,
  livestreamDef: {
    dates: [],
    tags: [],
    input: ''
  },
  eventDateDef: {
    dates: [],
    input: ''
  },
  lineup: []
};
var defaultDefinePriceCurrency = {
  code: 'US',
  name: 'United States',
  payment: 'stripe',
  region: 'NORTH AMERICA',
  currency: 'USD',
  symbol: '$'
};
var Module = function Module(props) {
  var _selectedStyle$option, _currentDefinePriceCu, _priceInput$current, _priceInput$current2, _ref2, _currentDefinePriceCu2, _editing$meta, _currentDefinePriceCu3;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    fetchBusy = _React$useState2[0],
    setFetchBusy = _React$useState2[1];
  var _React$useState3 = _react["default"].useState({}),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    currentSelected = _React$useState4[0],
    setCurrentSelected = _React$useState4[1];
  var _React$useState5 = _react["default"].useState([]),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    feed = _React$useState6[0],
    setFeed = _React$useState6[1];
  var _React$useState7 = _react["default"].useState([]),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    combinedFeed = _React$useState8[0],
    setCombinedFeed = _React$useState8[1];
  var _React$useState9 = _react["default"].useState({}),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    editing = _React$useState10[0],
    setEditing = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(null),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    editingSelectedStyle = _React$useState12[0],
    setEditingSelectedStyle = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(null),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    editingSelectedOption = _React$useState14[0],
    setEditingSelectedOption = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(Object.assign({}, defaultEditingOptionsMeta)),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    editingOptionsMeta = _React$useState16[0],
    setEditingOptionsMeta = _React$useState16[1];
  var _React$useState17 = _react["default"].useState(null),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    shop = _React$useState18[0],
    setShop = _React$useState18[1];
  var _React$useState19 = _react["default"].useState(null),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    shopProducts = _React$useState20[0],
    setShopProducts = _React$useState20[1];
  var _React$useState21 = _react["default"].useState({}),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    pageError = _React$useState22[0],
    setPageError = _React$useState22[1];
  var _React$useState23 = _react["default"].useState(null),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    tempImagesForCurrentlyEditing = _React$useState24[0],
    setTempImagesForCurrentlyEditing = _React$useState24[1];
  var _React$useState25 = _react["default"].useState(null),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    currentLineupEditing = _React$useState26[0],
    setCurrentLineupEditing = _React$useState26[1];
  var _React$useState27 = _react["default"].useState(false),
    _React$useState28 = _slicedToArray(_React$useState27, 2),
    isSettingCurrency = _React$useState28[0],
    setIsSettingCurrency = _React$useState28[1];
  var _React$useState29 = _react["default"].useState(defaultDefinePriceCurrency),
    _React$useState30 = _slicedToArray(_React$useState29, 2),
    currentDefinePriceCurrency = _React$useState30[0],
    setCurrentDefinePriceCurrency = _React$useState30[1];
  var styleInput = _react["default"].useRef();
  var optionInput = _react["default"].useRef();
  var quantityInput = _react["default"].useRef();
  var priceInput = _react["default"].useRef();
  var optionSelect = _react["default"].useRef();
  var nameRef = _react["default"].useRef();
  var setCurrencySelect = _react["default"].useRef();
  var currentCurrencyRef = _react["default"].useRef();
  var lineupNameRef = _react["default"].useRef();
  var lineupDescriptionRef = _react["default"].useRef();
  var lineupTimeRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    var selector = props.profile ? 'shopProfileData' : 'shop';
    if (props && props[selector]) {
      var f = props[selector].products && Array.isArray(props[selector].products) ? props[selector].products.concat(feed) : [];
      var s = props[selector].shop;
      var update = false;
      for (var i = 0; i < combinedFeed.length; i++) {
        if (!(0, _util.compareObjects)(combinedFeed, f)) {
          update = true;
          break;
        }
      }
      if (!shop || !s || s && !s.id) {
        setShop(s);
      }
      if (!shopProducts) {
        setShopProducts(f);
      }
      if (combinedFeed.length === 0 && f.length !== 0) {
        setCombinedFeed(f);
      }
    }
  }, [props.shopData, props.shopProfileData, feed, combinedFeed]);
  var defaultOption = function defaultOption() {
    var addOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var o = {
      sid: (0, _uuid.v4)(),
      quantity: 1
    };
    if (addOption) {
      o.option = '';
    }
    return o;
  };
  var defaultStyle = function defaultStyle() {
    return {
      price: 1,
      currency: 'USD',
      priceTable: {},
      sid: (0, _uuid.v4)(),
      style: '',
      option: [defaultOption(false)]
    };
  };
  var defaultLineup = function defaultLineup() {
    return {
      id: (0, _uuid.v4)(),
      title: '',
      description: '',
      time: null,
      image: ''
    };
  };
  var adminAuth = props._loggedIn && props._loggedIn.identifier && props.profileData && props.profileData.user && props.profileData.user.id && props._loggedIn.identifier === props.profileData.user.id;
  var handleEdit = function handleEdit(product) {
    console.log(product);
    if (shop && shop.id) {
      setCurrentDefinePriceCurrency(defaultDefinePriceCurrency);
      setEditing(product);
      setTimeout(function () {
        var temp = _objectSpread({}, product);
        temp.name = product.name;
        setEditing(temp);
      }, 200);
    }
  };
  var createNewProduct = _react["default"].useCallback(function (e) {
    try {
      console.log(e);
      if (shop && shop.id && (0, _util.isObjectEmpty)(editing)) {
        var style = defaultStyle();
        var product = {
          id: (0, _uuid.v4)(),
          shop: shop.id,
          name: '',
          detailmeta: {},
          styles: [style],
          shipping: [],
          published: false,
          images: [],
          protype: {
            type: 'virtual'
          },
          infinite: false,
          meta: {},
          files: {},
          "new": true
        };
        setCurrentDefinePriceCurrency(defaultDefinePriceCurrency);
        setEditing(product);
        setEditingSelectedStyle(style.sid);
        setCurrentLineupEditing(null);
        setTempImagesForCurrentlyEditing(null);
        var tempMeta = Object.assign({}, defaultEditingOptionsMeta);
        tempMeta.productType = 'virtual';
        setEditingOptionsMeta(tempMeta);
        setTimeout(function () {
          styleInput.current.value = style.style;
          if (style.option[0] && Object.hasOwnProperty.call(style.option[0], 'option')) {
            optionInput.current.value = style.option[0].option;
          }
        }, 200);
      }
      // create template for new product
    } catch (err) {
      console.log(err); // fail silently
    }
  });

  var handleCancelProduct = _react["default"].useCallback(function (e) {
    setCurrentDefinePriceCurrency(defaultDefinePriceCurrency);
    setEditing({});
  });
  var resolveOptions = function resolveOptions(product) {
    if (product && product.styles) {
      var f = product.styles.findIndex(function (m) {
        return m.sid === editingSelectedStyle;
      });
      if (f > -1) {
        return product.styles[f].option;
      }
    }
    return [];
  };
  var resolveOption = function resolveOption(option, prop) {
    console.log(option);
    var o = option.find(function (m) {
      return m.sid === editingSelectedOption;
    });
    if (o) {
      return o[prop];
    }
    return null;
  };
  var setCurrentStyleName = _react["default"].useCallback(function (e) {
    console.log(e.currentTarget.value);
    if (e.currentTarget) {
      var temp = _objectSpread({}, editing);
      var f = editing.styles.findIndex(function (m) {
        return m.sid === editingSelectedStyle;
      });
      if (f > -1) {
        temp.styles[f].style = e.currentTarget.value;
      }
      setEditing(temp);
    }
  });
  var setCurrentOptionName = _react["default"].useCallback(function (e) {
    console.log(e.currentTarget.value, editingSelectedOption);
    if (e.currentTarget) {
      var temp = _objectSpread({}, editing);
      var f = temp.styles.findIndex(function (m) {
        return m.sid === editingSelectedStyle;
      });
      if (f > -1) {
        if (editingSelectedOption == null) {
          setEditingSelectedOption(editing.styles[f].option && editing.styles[f].option[0] ? editing.styles[f].option[0].sid : '');
        }
        console.log(f, temp.styles[f].option, editingSelectedOption);
        var f2 = temp.styles[f].option.findIndex(function (m) {
          return m.sid === editingSelectedOption;
        });
        console.log(f2);
        if (f2 > -1) {
          temp.styles[f].option[f2].option = e.currentTarget.value;
        }
        setEditing(temp);
      }
    }
  });
  var setCurrentQuantity = _react["default"].useCallback(function (e) {
    if (e.currentTarget) {
      var temp = _objectSpread({}, editing);
      var f = temp.styles.findIndex(function (m) {
        return m.sid === editingSelectedStyle;
      });
      if (f > -1) {
        console.log(f, editingSelectedStyle, temp);
        var f2 = temp.styles[f].option.length === 1 ? 0 : temp.styles[f].option.findIndex(function (m) {
          return m.sid === editingSelectedOption;
        });
        console.log(f2);
        if (f2 > -1) {
          if (!isNaN(Number(e.currentTarget.value))) {
            temp.styles[f].option[f2].quantity = Number(e.currentTarget.value);
          }
        }
        setEditing(temp);
      }
    }
  });
  var setInfinity = _react["default"].useCallback(function (e) {
    if (e.currentTarget) {
      var temp = _objectSpread({}, editing);
      var f = temp.styles.findIndex(function (m) {
        return m.sid === editingSelectedStyle;
      });
      if (f > -1) {
        var f2 = temp.styles[f].option.length === 1 ? 0 : temp.styles[f].option.findIndex(function (m) {
          return m.sid === editingSelectedOption;
        });
        if (f2 > -1) {
          if (!Object.prototype.hasOwnProperty.call(temp.styles[f].option[f2], 'quantity') || temp.styles[f].option[f2].quantity && temp.styles[f].option[f2].quantity !== 10000000) {
            temp.styles[f].option[f2].quantity = Number(10000000);
          } else {
            temp.styles[f].option[f2].quantity = 1;
          }
        }
        setEditing(temp);
      }
    }
  });
  var setCurrentPrice = _react["default"].useCallback(function (e) {
    if (e.currentTarget) {
      var temp = _objectSpread({}, editing);
      var f = temp.styles.findIndex(function (m) {
        return m.sid === editingSelectedStyle;
      });
      if (f > -1) {
        if (!isNaN(Number(e.currentTarget.value))) {
          if ((currentDefinePriceCurrency === null || currentDefinePriceCurrency === void 0 ? void 0 : currentDefinePriceCurrency.currency) === 'USD') {
            temp.styles[f].price = Number(e.currentTarget.value);
          } else {
            if (!temp.styles[f].priceTable) {
              temp.styles[f].priceTable = {};
            }
            temp.styles[f].priceTable[currentDefinePriceCurrency.currency] = Number(e.currentTarget.value);
          }
          setEditing(temp);
        }
      }
    }
  });
  var changeCurrentStyle = _react["default"].useCallback(function (e) {
    console.log(e.currentTarget.value);
    if (e.currentTarget) {
      setEditingSelectedStyle(e.currentTarget.value);
      var f = editing.styles.findIndex(function (m) {
        return m.sid === e.currentTarget.value;
      });
      styleInput.current.value = editing.styles[f].style;
      console.log(editing.styles);
      setTimeout(function () {
        if (optionInput && optionInput.current) {
          optionInput.current.value = editing.styles[f].option && editing.styles[f].option[0] ? editing.styles[f].option[0].option : '';
          setEditingSelectedOption(editing.styles[f].option && editing.styles[f].option[0] ? editing.styles[f].option[0].sid : '');
          if (optionSelect.current) {
            optionSelect.current.selectedIndex = 0;
          }
        }
      }, 250);
      quantityInput.current.value = editing.styles[f].option && editing.styles[f].option[0] ? editing.styles[f].option[0].quantity : 1;
      priceInput.current.value = editing.styles[f] ? editing.styles[f].price : 1;
    }
  });
  var changeCurrentOption = _react["default"].useCallback(function (e) {
    console.log(e.currentTarget.value);
    if (e.currentTarget) {
      var f = editing.styles.findIndex(function (m) {
        return m.sid === editingSelectedStyle;
      });
      if (f > -1) {
        var temp = editing.styles[f].option.find(function (m) {
          return m.sid === e.currentTarget.value;
        });
        console.log(temp);
        if (temp) {
          optionInput.current.value = temp.option;
          setEditingSelectedOption(temp.sid);
          quantityInput.current.value = temp.quantity;
        }
      }
    }
  });
  var addStyle = _react["default"].useCallback(function (e) {
    var temp = _objectSpread({}, editing);
    temp.styles.push(defaultStyle());
    setEditing(temp);
  });
  var addOption = _react["default"].useCallback(function (e) {
    console.log(editing, editingSelectedStyle);
    var temp = _objectSpread({}, editing);
    var f = editing.styles.findIndex(function (m) {
      return m.sid === editingSelectedStyle;
    });
    console.log(f);
    if (f > -1) {
      var o = defaultOption();
      if (editing.styles[f].option[0] && !Object.hasOwnProperty.call(editing.styles[f].option[0], 'option')) {
        editing.styles[f].option[0].option = '';
        setEditingSelectedOption(editing.styles[f].option[0].sid);
      } else {
        editing.styles[f].option.push(o);
        setEditingSelectedOption(o.sid);
      }
    }
    setEditing(temp);
  });
  var onProductTypeChange = _react["default"].useCallback(function (e) {
    if (e.currentTarget) {
      var value = e.currentTarget.value;
      var temp = _objectSpread({}, editingOptionsMeta);
      temp.productType = value;
      setEditingOptionsMeta(temp);
    }
  });
  var setOptionsMetaData = _react["default"].useCallback(function (e) {
    console.log(e.currentTarget.checked, e.currentTarget.getAttribute('option'));
    if (e.currentTarget) {
      if (e.currentTarget.getAttribute('option')) {
        if (Object.prototype.hasOwnProperty.call(e.currentTarget, 'checked')) {
          var temp = _objectSpread({}, editingOptionsMeta);
          temp[e.currentTarget.getAttribute('option')] = e.currentTarget.checked;
          setEditingOptionsMeta(temp);
          setEditingOptionsMeta(function (prev) {
            return _objectSpread({}, prev);
          });
        } else if (e.currentTarget.getAttribute('option') === 'livestreamDef' || e.currentTarget.getAttribute('option') === 'eventDateDef') {
          var _temp = _objectSpread({}, editingOptionsMeta);
          if (e.currentTarget.getAttribute('option2')) {
            console.log(e.currentTarget);
            _temp[e.currentTarget.getAttribute('option')][e.currentTarget.getAttribute('option2')] = e.currentTarget.value;
            var values = e.currentTarget.value.split(' ');
            var dates = [];
            var tags = [];
            values.map(function (v) {
              if (!isNaN(new Date(v))) {
                dates.push(new Date(v));
              } else {
                tags.push(v);
              }
            });
            _temp[e.currentTarget.getAttribute('option')].dates = dates;
            _temp[e.currentTarget.getAttribute('option')].tags = tags;
            console.log(_temp);
            setEditingOptionsMeta(_temp);
          }
        } else if (e.currentTarget.getAttribute('option') === 'lineupTemp') {
          var _temp2 = _objectSpread({}, editingOptionsMeta);
          if (!_temp2.lineup) {
            _temp2.lineup = [];
          }
          var cur = currentLineupEditing;
          if (_temp2.lineup.length < 10) {
            var _temp2$detailmeta$lin;
            console.log(cur);
            if (cur === null) {
              cur = _temp2.lineup.length; // Set valid index for currently editing
              setCurrentLineupEditing(cur);
            }
            var temp2 = _objectSpread({}, editing);
            if (!_temp2.lineup[cur]) {
              _temp2.lineup[cur] = defaultLineup();
              if (editing && !temp2.detailmeta.lineup) {
                temp2.detailmeta.lineup = [];
              }
            }
            console.log(temp2.detailmeta.lineup[cur], _temp2.lineup[cur]);
            var retainImage = _temp2.lineup[cur].image == '' && (_temp2$detailmeta$lin = temp2.detailmeta.lineup[cur]) !== null && _temp2$detailmeta$lin !== void 0 && _temp2$detailmeta$lin.image ? temp2.detailmeta.lineup[cur].image : _temp2.lineup[cur].image;
            temp2.detailmeta.lineup[cur] = _temp2.lineup[cur];
            temp2.detailmeta.lineup[cur].image = retainImage;
            setEditing(temp2);
            _temp2.lineup[cur][e.currentTarget.getAttribute('option2')] = e.currentTarget.value;
            setEditingOptionsMeta(_temp2);
          }
        }
      }
    }
  });
  var updateLineup = _react["default"].useCallback(function (e) {
    if (e.currentTarget) {
      if (e.currentTarget.getAttribute('option')) {
        var temp = _objectSpread({}, editingOptionsMeta);
        if (e.currentTarget.getAttribute('option') === 'add') {
          if (temp.lineup && temp.lineup.length < 10) {
            temp.lineup.push(defaultLineup());
            setCurrentLineupEditing(temp.lineup.length - 1);
            lineupNameRef.current.value = '';
            lineupDescriptionRef.current.value = '';
            lineupTimeRef.current.value = null;
          }
        } else if (e.currentTarget.getAttribute('option') === 'remove') {
          if (temp.lineup && temp.lineup.length > 0) {
            temp.lineup.pop();
            setCurrentLineupEditing(temp.lineup.length - 1 > -1 ? temp.lineup.length - 1 : null);
            lineupNameRef.current.value = '';
            lineupDescriptionRef.current.value = '';
            lineupTimeRef.current.value = null;
          }
        } else if (e.currentTarget.getAttribute('option') === 'setSelected') {
          var index = e.currentTarget.getAttribute('index');
          if (!isNaN(index)) {
            setCurrentLineupEditing(index);
            lineupNameRef.current.value = temp.lineup[index].title;
            lineupDescriptionRef.current.value = temp.lineup[index].description;
            lineupTimeRef.current.value = temp.lineup[index].time;
          }
        }
      }
    }
  });
  var setCurrentName = _react["default"].useCallback(function (e) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      if (e.currentTarget.getAttribute('modif') && e.currentTarget.getAttribute('modif') === 'product_name') {
        var temp = _objectSpread({}, editing);
        temp.name = e.currentTarget.value;
        setEditing(temp);
      }
    }
  });
  var publishProduct = function publishProduct(modif, existing) {
    try {
      var fn = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var product, formData, imgNames, data;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (fetchBusy) {
                  _context.next = 27;
                  break;
                }
                setPageError({});
                product = _objectSpread({}, editing);
                console.log(product);
                product.detailmeta = _objectSpread({}, editingOptionsMeta);
                console.log('Publish Product', product);
                if (!(product.name === '')) {
                  _context.next = 10;
                  break;
                }
                setPageError({
                  message: 'Please enter a name for your product',
                  location: 'product_name'
                });
                setFetchBusy(false);
                return _context.abrupt("return", 1);
              case 10:
                formData = new FormData();
                imgNames = [];
                if (tempImagesForCurrentlyEditing && tempImagesForCurrentlyEditing.editing === product.id) {
                  // Retrieve files for upload if matching upload image edit
                  tempImagesForCurrentlyEditing.images.forEach(function (img) {
                    console.log('Img', img);
                    formData.append("image", img);
                    imgNames.push(img.name);
                  });
                  formData.append('imgNames', JSON.stringify(imgNames));
                }
                formData.append('domainKey', props.domainKey);
                formData.append('hash', props._loggedIn.hash);
                formData.append('identifier', props._loggedIn.identifier);
                formData.append('product', JSON.stringify(product));
                formData.append('shop', shop.id);
                formData.append('status', modif);
                formData.append('existing', existing);
                setFetchBusy(true);
                setTimeout(function () {
                  setFetchBusy(false);
                }, 10000);
                _context.next = 24;
                return (0, _ecommerce.doPublishProduct)(props.apiUrl, props.domainKey, shop.id, props._loggedIn, product, formData);
              case 24:
                data = _context.sent;
                console.log(data);
                if (data) {
                  if (data.product) {
                    if (data.product.products) {
                      setShopProducts(data.product.products);
                      setCombinedFeed(data.product.products);
                      setCurrentDefinePriceCurrency(defaultDefinePriceCurrency);
                      setEditing({});
                      setFetchBusy(false);
                    }
                  }
                }
              case 27:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function fn() {
          return _ref.apply(this, arguments);
        };
      }();
      fn();
    } catch (err) {
      // fail silently
    }
  };
  var handlePublishProduct = _react["default"].useCallback(function (e) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      if (e.currentTarget.getAttribute('modif')) {
        var modif = e.currentTarget.getAttribute('modif');
        var existing = e.currentTarget.getAttribute('existing');
        publishProduct(modif, existing);
      }
    }
  });
  var passTempImages = function passTempImages(images) {
    setTempImagesForCurrentlyEditing({
      editing: editing.id,
      images: images
    });
  };
  var handleSetIsSettingCurrency = _react["default"].useCallback(function (e) {
    if (isSettingCurrency) {
      setIsSettingCurrency(false);
      return false;
    }
    setIsSettingCurrency(true);
    return true;
  });
  var changeCurrentCurrency = function changeCurrentCurrency(product, value) {
    console.log('Product Value', product, value);
    if (product["new"]) {
      var temp = editing;
      editing.meta.currency = value;
      setEditing(temp);
      return value;
    } else {
      var _temp3 = _toConsumableArray(combinedFeed);
      var f = _temp3.findIndex(function (m) {
        return m.id === product.id;
      });
      if (f > -1) {
        _temp3[f].meta.currency = value;
        setCombinedFeed(_temp3);
        return value;
      }
    }
    return null;
  };
  var handleChangeCurrentCurrency = _react["default"].useCallback(function (e) {
    var v = changeCurrentCurrency(editing, e.currentTarget.value);
    if (v) {
      currentCurrencyRef.current.innerHTML = v;
      var f = Object.entries(props.regionsData).find(function (m) {
        return m[1].currency === v;
      });
      if (f && f[1]) {
        setCurrentDefinePriceCurrency(f[1]);
        setDefaultPriceHtml(f[1]);
      }
    }
  });

  // list all shop items
  // allow for creation of shop item with
  // product name, description, options, size per option (os or custom) w/ quantity, type, publish, images
  // console.log(adminAuth, props, combinedFeed, shop, editing, editingOptionsMeta, editingOptionsMeta.productType, editingSelectedOption, editingSelectedStyle)

  var selectedStyle = editing && editing.styles ? editing.styles.find(function (m) {
    return m.sid === editingSelectedStyle;
  }) : null;
  var selectedOption = editing && selectedStyle && selectedStyle.option ? ((_selectedStyle$option = selectedStyle.option.find(function (m) {
    return m.sid === editingSelectedOption;
  })) !== null && _selectedStyle$option !== void 0 ? _selectedStyle$option : selectedStyle.option.length === 1) ? selectedStyle.option[0] : null : null;
  var setDefaultPriceHtml = function setDefaultPriceHtml(useDefinePriceCurrency) {
    var _useDefinePriceCurren;
    if (!useDefinePriceCurrency) {
      useDefinePriceCurrency = currentDefinePriceCurrency;
    }
    if (((_useDefinePriceCurren = useDefinePriceCurrency) === null || _useDefinePriceCurren === void 0 ? void 0 : _useDefinePriceCurren.currency) !== 'USD' && selectedStyle.priceTable && Object.prototype.hasOwnProperty.call(selectedStyle.priceTable, useDefinePriceCurrency.currency)) {
      priceInput.current.value = selectedStyle.priceTable[useDefinePriceCurrency.currency];
    } else if (selectedStyle !== null && selectedStyle !== void 0 && selectedStyle.price) {
      priceInput.current.value = selectedStyle.price;
    }
  };
  console.log(adminAuth, shop);
  var noShop = shop && shop.status && shop.status === 'nonexistent';
  console.log(noShop, editing, tempImagesForCurrentlyEditing, currentDefinePriceCurrency);
  console.log(editingOptionsMeta, currentLineupEditing);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy')
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ShopModule["default"].container)
  }, adminAuth && !noShop ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ShopModule["default"].adminContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: 'heading'
  }, "Shop"), /*#__PURE__*/_react["default"].createElement("div", {
    className: 'flex options',
    style: {
      gap: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    disabled: !(0, _util.isObjectEmpty)(editing),
    onClick: createNewProduct
  }, "Create New"), editing && !(0, _util.isObjectEmpty)(editing) ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleCancelProduct,
    modif: "save"
  }, editing["new"] ? 'Abandon' : 'Cancel') : null)) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Product_flex_container"
  }, editing !== null && editing !== void 0 && editing["new"] ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].currentlyEditingProductContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].currentEditingProductInnerContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].currentlyEditingProductContent)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].productImgContainer, " Product_img_container Product_img_container_large")
  }, /*#__PURE__*/_react["default"].createElement(_product.ProductImageManager, _extends({}, props, {
    editing: editing,
    passTempImages: passTempImages
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].productMetaContainer, " Product_meta_container")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].currentEditingProductCommandBar, " ").concat(_ProductImageManagerModule["default"].commandBar)
  }, /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleCancelProduct,
    modif: "save"
  }, "Abandon"))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Name of Product",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    name: "name",
    placeholder: "Product Name",
    style: {
      fontWeight: '600',
      width: '100%'
    },
    onChange: setCurrentName,
    ref: nameRef,
    modif: "product_name"
  })), pageError.location && pageError.location === 'product_name' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "error"
  }, pageError.message) : null), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "If your product has multiple styles, set them here. A style should be an alternate design or color for a single product that you want to track as single product. For example you might have white, black, grey for t-shirts as individual styles.",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600
    }
  }, "Style:"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown_input"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    ref: styleInput,
    onChange: setCurrentStyleName
  }), /*#__PURE__*/_react["default"].createElement("select", {
    id: editing.id + '_styles',
    name: editing.id + '_styles',
    style: {
      width: '100%'
    },
    onChange: changeCurrentStyle
  }, (0, _ecommerce.resolveStyles)(editing).map(function (style, i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: style.sid,
      className: "style_option",
      key: i
    }, style.style);
  }))))), selectedStyle && selectedStyle.option.length > 0 && selectedStyle.option[0] && Object.hasOwnProperty.call(selectedStyle.option[0], 'option') ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "If your product has options, set them here. An option should be a sizing or format choice that exists for all or most styles. For example you might have sizes XS, S, M, L, XL or OS as individual options per style.",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600
    }
  }, "Option:"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown_input"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    ref: optionInput,
    onChange: setCurrentOptionName
  }), /*#__PURE__*/_react["default"].createElement("select", {
    id: editing.id + '_options',
    name: editing.id + '_options',
    style: {
      width: '100%'
    },
    onChange: changeCurrentOption,
    ref: optionSelect
  }, editing.styles.find(function (m) {
    return m.sid === editingSelectedStyle;
  }).option.map(function (option, i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: option.sid,
      className: "option_option",
      key: i
    }, option.option);
  }))))) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Set the price for the currently selected Style",
    open: true
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600
    }
  }, (_currentDefinePriceCu = currentDefinePriceCurrency === null || currentDefinePriceCurrency === void 0 ? void 0 : currentDefinePriceCurrency.symbol) !== null && _currentDefinePriceCu !== void 0 ? _currentDefinePriceCu : '$')), /*#__PURE__*/_react["default"].createElement("input", {
    type: "currency",
    style: {
      width: '100%'
    },
    defaultValue: "1.00",
    ref: priceInput,
    onChange: setCurrentPrice
  }), validStyleObject && (currentDefinePriceCurrency === null || currentDefinePriceCurrency === void 0 ? void 0 : currentDefinePriceCurrency.currency) === 'USD' && selectedStyle.price != (priceInput === null || priceInput === void 0 ? void 0 : (_priceInput$current = priceInput.current) === null || _priceInput$current === void 0 ? void 0 : _priceInput$current.value) || (currentDefinePriceCurrency === null || currentDefinePriceCurrency === void 0 ? void 0 : currentDefinePriceCurrency.currency) !== 'USD' && (!selectedStyle.priceTable || selectedStyle.priceTable && !selectedStyle.priceTable[currentDefinePriceCurrency.currency] || currentDefinePriceCurrency !== null && currentDefinePriceCurrency !== void 0 && currentDefinePriceCurrency.currency && selectedStyle.priceTable && Object.prototype.hasOwnProperty.call(selectedStyle.priceTable, currentDefinePriceCurrency.currency) && selectedStyle.priceTable[currentDefinePriceCurrency.currency] != priceInput.current.value) ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "The price displayed is currently not set for this product style. Click here to set it"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: setCurrentPrice,
    value: priceInput === null || priceInput === void 0 ? void 0 : (_priceInput$current2 = priceInput.current) === null || _priceInput$current2 === void 0 ? void 0 : _priceInput$current2.value,
    style: {
      whiteSpace: 'nowrap'
    }
  }, "Set Price")) : null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "You can set pricing in multiple currencies. Although the value you keep selected here will be the primary currency. Use the currency selector to choose a currency to begin setting prices in the respective currency. Countries that users reside in for which you have not set a currency will be presented the closest relevant currency you have defined a pricepoint in"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].currencyLabel, " ").concat(isSettingCurrency ? "".concat(_ProductImageManagerModule["default"].currencyLabelActive) : null),
    onClick: handleSetIsSettingCurrency,
    ref: currentCurrencyRef
  }, (_ref2 = (_currentDefinePriceCu2 = currentDefinePriceCurrency === null || currentDefinePriceCurrency === void 0 ? void 0 : currentDefinePriceCurrency.currency) !== null && _currentDefinePriceCu2 !== void 0 ? _currentDefinePriceCu2 : editing === null || editing === void 0 ? void 0 : (_editing$meta = editing.meta) === null || _editing$meta === void 0 ? void 0 : _editing$meta.currency) !== null && _ref2 !== void 0 ? _ref2 : 'USD')), isSettingCurrency ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].setCurrencyExternalContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].setCurrencyContainer)
  }, /*#__PURE__*/_react["default"].createElement("select", {
    id: editing.id + '_setCurrency',
    name: editing.id + '_setCurrency',
    style: {
      width: '100%'
    },
    onChange: handleChangeCurrentCurrency,
    ref: setCurrencySelect,
    defaultValue: (_currentDefinePriceCu3 = currentDefinePriceCurrency === null || currentDefinePriceCurrency === void 0 ? void 0 : currentDefinePriceCurrency.currency) !== null && _currentDefinePriceCu3 !== void 0 ? _currentDefinePriceCu3 : 'USD'
  }, props !== null && props !== void 0 && props.regionsData ? Object.entries(props.regionsData).map(function (m) {
    var _validStyleObject;
    return /*#__PURE__*/_react["default"].createElement("option", {
      className: "".concat(_ProductImageManagerModule["default"].setCurrencyOption, " ").concat(m[1].currency !== 'USD' ? (_validStyleObject = validStyleObject) !== null && _validStyleObject !== void 0 && _validStyleObject.priceTable && Object.prototype.hasOwnProperty.call(validStyleObject.priceTable, m[1].currency) ? _ProductImageManagerModule["default"].currencyOptionUsed : m[1].currency === 'USD' ? _ProductImageManagerModule["default"].currencyOptionUsed : null : null),
      value: m[1].currency,
      symbol: m[1].symbol
    }, /*#__PURE__*/_react["default"].createElement("div", null, m[1].currency), /*#__PURE__*/_react["default"].createElement("div", null, "\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, m[1].name), /*#__PURE__*/_react["default"].createElement("div", null, "\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, m[1].symbol));
  }) : null))) : null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Set the quantity for the currently selected Style & Option combo"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600,
      display: selectedOption && selectedOption.quantity && selectedOption.quantity === 10000000 ? 'none' : 'block'
    }
  }, "Qty")), /*#__PURE__*/_react["default"].createElement("input", {
    type: "number",
    style: {
      width: '100%',
      display: selectedOption && selectedOption.quantity && selectedOption.quantity === 10000000 ? 'none' : 'block'
    },
    defaultValue: "1",
    ref: quantityInput,
    onChange: setCurrentQuantity
  }), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Infinite stock"
  }, /*#__PURE__*/_react["default"].createElement(_AllInclusive["default"], {
    style: {
      width: '15px'
    }
  })), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    style: {
      margin: 0
    },
    onChange: setInfinity,
    checked: selectedOption && selectedOption.quantity && selectedOption.quantity === 10000000
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 Product_admin_choice_container"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: addStyle
  }, "Add Style"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: addOption
  }, "Add Option")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center',
      height: '18px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Set the product type"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600,
      paddingTop: '.2rem'
    }
  }, "Type: ")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      fontSize: '.8rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "radio",
    id: "virtual",
    name: "fav_language",
    value: "virtual",
    defaultChecked: true,
    onChange: onProductTypeChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    "for": "virtual"
  }, "Virtual"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "radio",
    id: "physical",
    name: "fav_language",
    value: "physical",
    onChange: onProductTypeChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    "for": "physical"
  }, "Physical"))), editingOptionsMeta && editingOptionsMeta.productType === 'virtual' ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 promptContainer",
    style: {
      alignItems: 'center',
      height: '20px',
      borderRadius: '.5rem',
      margin: '.25rem 0'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Ticketed Products offer universally unique ids that are unique across the product being sold and can be stamped onto Virtual Ticket Images",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "bottom"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem'
    }
  }, "Is this a ticket?"), /*#__PURE__*/_react["default"].createElement(_ConfirmationNumber["default"], {
    style: {
      width: '15px'
    }
  })), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    style: {
      margin: 0
    },
    value: editingOptionsMeta.ticket,
    defaultChecked: editingOptionsMeta.ticket,
    onChange: setOptionsMetaData,
    option: "ticket"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "promptContainer",
    style: {
      borderRadius: '.5rem',
      margin: '.25rem 0'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center',
      height: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "You can use a date to authorize all users that purchase this ticket for access to your livestreams on that day. Or you can use a tag that you must include in the livestream tags field when you create it. Please use this if you want to put your livestream behind this paywalled purchase",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "bottom",
    paddin: true
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem'
    }
  }, "Is this for a livestream?"), /*#__PURE__*/_react["default"].createElement(_Stadium["default"], {
    style: {
      width: '15px'
    }
  })), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    style: {
      margin: 0
    },
    value: editingOptionsMeta.livestream,
    defaultChecked: editingOptionsMeta.livestream,
    onChange: setOptionsMetaData,
    option: "livestream"
  })), editingOptionsMeta.livestream ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      paddingBottom: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Enter dates or words for matching authorization. Enter dates in the following format MON-DD-YYYY-HH:MM or they will not be parsed as dates. Time must be input in 24 H military time. Values that do not match dates will be parsed as tags that can be added to livestreams. Any matches will authorize viewership of the stream for purchases of this ticket",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    style: {
      marginBottom: '.125rem',
      width: '-webkit-fill-available'
    },
    placeholder: "Date in DD/MM/YY format or a tag",
    onInput: setOptionsMetaData,
    option: "livestreamDef",
    option2: "input",
    defaultValue: editingOptionsMeta.livestreamDef.input
  })), editingOptionsMeta.livestreamDef.dates.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, editingOptionsMeta.livestreamDef.dates.map(function (d, i) {
    return d !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem",
      key: i
    }, d ? (0, _util.getFormattedDate)(d, {
      pretty: true
    }) : '') : /*#__PURE__*/_react["default"].createElement("div", null);
  })) : /*#__PURE__*/_react["default"].createElement("div", null), editingOptionsMeta.livestreamDef.tags.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, editingOptionsMeta.livestreamDef.tags.map(function (d, i) {
    return d !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem",
      key: i
    }, d) : /*#__PURE__*/_react["default"].createElement("div", null);
  })) : /*#__PURE__*/_react["default"].createElement("div", null)) : null, editingOptionsMeta.ticket ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem'
    }
  }, "Date for Event"), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Enter dates in the following format MON-DD-YYYY-HH:MM or they will not be parsed as dates. Time must be input in 24 H military time. Values that do not match dates will be parsed as tags that can be added to livestreams. Any matches will authorize viewership of the stream for purchases of this ticket",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    style: {
      marginBottom: '.125rem',
      width: '-webkit-fill-available'
    },
    placeholder: "Date in MON-DD-YYYY-HH:MM format. If the ticket does not have an event date leave empty",
    onInput: setOptionsMetaData,
    option: "eventDateDef",
    option2: "input",
    defaultValue: editingOptionsMeta.eventDateDef.input
  })), editingOptionsMeta.eventDateDef.dates.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, editingOptionsMeta.eventDateDef.dates.map(function (d, i) {
    return d !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem",
      key: i
    }, d ? (0, _util.getFormattedDate)(d, {
      pretty: true
    }) : '') : /*#__PURE__*/_react["default"].createElement("div", null);
  })) : /*#__PURE__*/_react["default"].createElement("div", null)) : null, editingOptionsMeta.livestream ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: '#222222',
      marginTop: '.25rem',
      marginBottom: '.25rem',
      borderRadius: '.25rem',
      padding: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: '600'
    }
  }, "Lineup"), editingOptionsMeta.lineup && editingOptionsMeta.lineup.length < 10 || !editingOptionsMeta.lineup ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Enter participants name",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Name",
    style: {
      fontSize: '.8rem',
      width: '100%'
    },
    onInput: setOptionsMetaData,
    option: "lineupTemp",
    option2: "title",
    ref: lineupNameRef
  })), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Optional: Enter description of participant",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Description",
    style: {
      fontSize: '.8rem',
      width: '100%'
    },
    onInput: setOptionsMetaData,
    option: "lineupTemp",
    option2: "description",
    ref: lineupDescriptionRef
  })), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Optional: Enter expected time for lineup participant to be performing",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "time",
    placeholder: "Time",
    style: {
      fontSize: '.8rem',
      width: '100%'
    },
    onInput: setOptionsMetaData,
    option: "lineupTemp",
    option2: "time",
    ref: lineupTimeRef
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.75rem',
      padding: '.125rem',
      paddingTop: '.25rem'
    }
  }, "After you publish this product you will be able to add Lineup participant images"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, editingOptionsMeta.lineup && editingOptionsMeta.lineup.length < 10 && editingOptionsMeta.lineup.length > 0 ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Add another Lineup Participant",
    placement: "bottom"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%'
    },
    onClick: updateLineup,
    option: "add"
  }, "Add")) : null, editingOptionsMeta.lineup && editingOptionsMeta.lineup[currentLineupEditing] ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Remove this Lineup Participant",
    placement: "bottom"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%'
    },
    onClick: updateLineup,
    option: "remove"
  }, "Remove")) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      overflow: 'auto'
    }
  }, editingOptionsMeta.lineup && editingOptionsMeta.lineup.map ? editingOptionsMeta.lineup.map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "lineupItem_editing",
      style: {
        maxWidth: '75px'
      },
      onClick: updateLineup,
      option: 'setSelected',
      index: i,
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "lineupItem_id",
      style: {
        fontSize: '.5rem',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }
    }, m.id), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        fontSize: '.7rem',
        fontWeight: '600',
        overflowWrap: 'anywhere'
      }
    }, m.title), m.time ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "lineupItem_time",
      style: {
        fontSize: '1rem'
      }
    }, (0, _util.getFormattedTime)(m.time, {
      simple: true
    })) : null);
  }) : null)) : null) : null)) : /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 Product_admin_choice_container",
    style: {
      marginTop: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handlePublishProduct,
    modif: "publish"
  }, "Publish"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handlePublishProduct,
    modif: "save"
  }, "Save"), editing ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleCancelProduct,
    modif: "save"
  }, editing["new"] ? 'Abandon' : 'Cancel') : null))))) : null, combinedFeed && combinedFeed.map ? combinedFeed.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement(_product.Product, _extends({}, props, {
      product: item,
      key: i,
      apiUrl: props.apiUrl,
      domainKey: props.domainKey,
      _loggedIn: props._loggedIn,
      fetchBusy: fetchBusy,
      setFetchBusy: setFetchBusy,
      _setLoggedIn: props._setLoggedIn,
      handleEdit: handleEdit,
      editing: editing,
      setEditing: setEditing,
      setCurrentName: setCurrentName,
      pageError: pageError,
      styleInput: styleInput,
      setCurrentStyleName: setCurrentStyleName,
      changeCurrentStyle: changeCurrentStyle,
      resolveStyles: _ecommerce.resolveStyles,
      selectedStyle: selectedStyle,
      setCurrentOptionName: setCurrentOptionName,
      optionInput: optionInput,
      changeCurrentOption: changeCurrentOption,
      optionSelect: optionSelect,
      editingSelectedStyle: editingSelectedStyle,
      priceInput: priceInput,
      setCurrentPrice: setCurrentPrice,
      selectedOption: selectedOption,
      quantityInput: quantityInput,
      setCurrentQuantity: setCurrentQuantity,
      setInfinity: setInfinity,
      addStyle: addStyle,
      addOption: addOption,
      onProductTypeChange: onProductTypeChange,
      editingOptionsMeta: editingOptionsMeta,
      setEditingOptionsMeta: setEditingOptionsMeta,
      setOptionsMetaData: setOptionsMetaData,
      handlePublishProduct: handlePublishProduct,
      handleCancelProduct: handleCancelProduct,
      nameRef: nameRef,
      setEditingSelectedStyle: setEditingSelectedStyle,
      setEditingSelectedOption: setEditingSelectedOption,
      setShopProducts: setShopProducts,
      setCombinedFeed: setCombinedFeed,
      setCurrentLineupEditing: setCurrentLineupEditing,
      currentLineupEditing: currentLineupEditing,
      defaultLineup: defaultLineup,
      setCurrencySelect: setCurrencySelect,
      changeCurrentCurrency: changeCurrentCurrency,
      currentDefinePriceCurrency: currentDefinePriceCurrency,
      setCurrentDefinePriceCurrency: setCurrentDefinePriceCurrency,
      setDefaultPriceHtml: setDefaultPriceHtml
    }));
  }) : null)));
};
var _default = Module;
exports["default"] = _default;