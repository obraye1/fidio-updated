"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateLocalLoginSession = exports.logout = exports.grabUsername = exports.checkUserData = exports.checkSignedInAndPrompt = exports.checkSignedIn = exports.attemptThirdPartySignIn = void 0;
var _universalCookie = _interopRequireDefault(require("universal-cookie"));
var _fetch = require("/modules/utility/fetch/fetch.js");
var _ecommerce = require("/modules/utility/ecommerce/ecommerce.js");
var _jwtDecode = _interopRequireDefault(require("jwt-decode"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var cookies = new _universalCookie["default"]();
var updateLocalLoginSession = function updateLocalLoginSession(data) {
  cookies.set('login', data);
};

/**
 * Attempt to sign in user or ask for more information (username) for register completion
 * @param {*} data 
 * @returns {*}
 */
exports.updateLocalLoginSession = updateLocalLoginSession;
var attemptThirdPartySignIn = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data, apiUrl, domainKey) {
    var decodedToken, fetchBody, res, _res$vendor, cookieObj, cart, event;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // Decode google third party sign in data and make fetch to server for info

          if (data && data.detail && data.detail.credential) {
            decodedToken = (0, _jwtDecode["default"])(data.detail.credential);
          }
          fetchBody = {
            domainKey: domainKey,
            googleData: data,
            token: decodedToken,
            encodedToken: data.detail.credential
          };
          if (data.requestedUsername) {
            fetchBody.requestedUsername = data.requestedUsername;
          }
          // Call to server to look for user
          _context.next = 6;
          return (0, _fetch.fetchPost)(apiUrl + '/m/authenticate', null, null, fetchBody);
        case 6:
          res = _context.sent;
          if (res && res.hash) {
            // Update cookie signifying login
            cookieObj = _defineProperty({
              identifier: res.identifier,
              username: res.username,
              icon: res.icon,
              hash: res.hash,
              vendor: (_res$vendor = res.vendor) !== null && _res$vendor !== void 0 ? _res$vendor : null
            }, "icon", res.icon); // Optionally set official minipost plan
            if (res.plan) {
              cookieObj.plan = res.plan;
            }
            if (res.cart) {
              cart = JSON.parse(localStorage.getItem('cart'));
              (0, _ecommerce.updateCart)(cart, res.cart);
            }
            updateLocalLoginSession(cookieObj);
            event = new CustomEvent("mute-login-error", {
              "detail": true
            }); // Mutes login errors across application
            document.dispatchEvent(event);
          }
          return _context.abrupt("return", res);
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", null);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function attemptThirdPartySignIn(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.attemptThirdPartySignIn = attemptThirdPartySignIn;
var checkSignedIn = function checkSignedIn() {
  if (!cookies.get('login')) {
    return false;
  }
  return cookies.get('login');
};
exports.checkSignedIn = checkSignedIn;
var checkSignedInAndPrompt = function checkSignedInAndPrompt(setPageError, desc) {
  try {
    var user = checkSignedIn();
    if (!user) {
      if (setPageError) {
        setPageError(desc ? desc : "Please sign in with google to register");
      }
      google.accounts.id.prompt(function (notification) {
        // console.log('on prompt notification', notification);
      });
      return false;
    }
    return user;
  } catch (err) {
    return err; // fail silently
  }
};
exports.checkSignedInAndPrompt = checkSignedInAndPrompt;
var logout = function logout(_setLoggedIn) {
  try {
    cookies.remove('login');
    if (_setLoggedIn) {
      _setLoggedIn(false);
    }
    (0, _ecommerce.updateCart)('', {
      items: [],
      user: null
    });
    var onOneTapSignedInGoogle = function onOneTapSignedInGoogle(data) {
      var event = new CustomEvent("thirdparty-signin", {
        "detail": data
      });
      document.dispatchEvent(event);
    };
    var doGoogleInit = function doGoogleInit() {
      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
      try {
        google.accounts.id.initialize({
          client_id: '169701902623-9a74mqcbqr38uj87qm8tm3190cicaa7m.apps.googleusercontent.com',
          callback: onOneTapSignedInGoogle
        });
        console.log('Google Loaded');
        return true;
      } catch (err) {
        console.log(err);
        // fail silently
      }
    };

    setTimeout(function () {
      doGoogleInit();
    }, 2000);
    return true;
  } catch (err) {
    console.log(err);
    return false; // fail silently
  }
};

/**
 * Register username and assign it to currently signed in user *Protected route*
 * @param {String} desiredUsername 
 * @returns 
 */
exports.logout = logout;
var grabUsername = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(apiUrl, domainKey, data, checkSignedIn, setLoggedIn) {
    var user, fetchBody, res;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          if (!checkSignedIn) {
            _context2.next = 32;
            break;
          }
          user = checkSignedIn();
          if (!(user && user.identifier && user.hash)) {
            _context2.next = 29;
            break;
          }
          fetchBody = {
            domainKey: domainKey,
            identifier: user.identifier,
            hash: user.hash,
            proposedUsername: data.proposedUsername
          };
          _context2.next = 7;
          return (0, _fetch.fetchPost)(apiUrl + '/m/grabusername', null, null, fetchBody);
        case 7:
          res = _context2.sent;
          if (res) {
            _context2.next = 12;
            break;
          }
          return _context2.abrupt("return", false);
        case 12:
          if (!res.hasOwnProperty('status')) {
            _context2.next = 20;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context2.next = 18;
            break;
          }
          logout();
          return _context2.abrupt("return", "disauthenticated");
        case 18:
          if (!(res.status == "username taken")) {
            _context2.next = 20;
            break;
          }
          return _context2.abrupt("return", res.status);
        case 20:
          if (!(res.identifier && res.username && res.hash)) {
            _context2.next = 27;
            break;
          }
          user.username = res.username;
          user.hash = res.hash;
          user.identifier = res.identifier;
          updateLocalLoginSession(user);
          setLoggedIn(user);
          return _context2.abrupt("return", true);
        case 27:
          _context2.next = 30;
          break;
        case 29:
          return _context2.abrupt("return", false);
        case 30:
          _context2.next = 33;
          break;
        case 32:
          return _context2.abrupt("return", false);
        case 33:
          _context2.next = 38;
          break;
        case 35:
          _context2.prev = 35;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", false);
        case 38:
          return _context2.abrupt("return", false);
        case 39:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 35]]);
  }));
  return function grabUsername(_x4, _x5, _x6, _x7, _x8) {
    return _ref2.apply(this, arguments);
  };
}();
exports.grabUsername = grabUsername;
var checkUserData = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(pageProps, checkItems) {
    var _pageProps$_loggedIn, _pageProps$_loggedIn2, fetchBody, res;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          console.log('Check user data', pageProps);
          if (!checkItems) {
            _context3.next = 28;
            break;
          }
          if (!(pageProps !== null && pageProps !== void 0 && (_pageProps$_loggedIn = pageProps._loggedIn) !== null && _pageProps$_loggedIn !== void 0 && _pageProps$_loggedIn.identifier && pageProps !== null && pageProps !== void 0 && (_pageProps$_loggedIn2 = pageProps._loggedIn) !== null && _pageProps$_loggedIn2 !== void 0 && _pageProps$_loggedIn2.hash && pageProps.domainKey && pageProps.apiUrl)) {
            _context3.next = 27;
            break;
          }
          fetchBody = {
            domainKey: pageProps.domainKey,
            identifier: pageProps._loggedIn.identifier,
            hash: pageProps._loggedIn.hash,
            ip: pageProps._loggedIn.ip,
            checkItems: checkItems
          };
          console.log(fetchBody);
          _context3.next = 7;
          return (0, _fetch.fetchPost)(pageProps.apiUrl + '/m/checkuserdata', null, null, fetchBody);
        case 7:
          res = _context3.sent;
          if (res) {
            _context3.next = 12;
            break;
          }
          return _context3.abrupt("return", false);
        case 12:
          if (!res.hasOwnProperty('status')) {
            _context3.next = 25;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context3.next = 18;
            break;
          }
          logout();
          return _context3.abrupt("return", "disauthenticated");
        case 18:
          if (!(res.status == "failed")) {
            _context3.next = 22;
            break;
          }
          return _context3.abrupt("return", false);
        case 22:
          if (!(res.status == "success")) {
            _context3.next = 25;
            break;
          }
          console.log('Check user data', res);
          return _context3.abrupt("return", res);
        case 25:
          _context3.next = 28;
          break;
        case 27:
          return _context3.abrupt("return", false);
        case 28:
          return _context3.abrupt("return", null);
        case 29:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function checkUserData(_x9, _x10) {
    return _ref3.apply(this, arguments);
  };
}();
exports.checkUserData = checkUserData;