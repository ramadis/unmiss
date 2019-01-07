(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("unmiss", [], factory);
	else if(typeof exports === 'object')
		exports["unmiss"] = factory();
	else
		root["unmiss"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = withMethodMissing;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withMethodMissing(originalClass) {
  return function (_originalClass) {
    _inherits(SafeClass, _originalClass);

    function SafeClass() {
      var _ref;

      var _ret;

      _classCallCheck(this, SafeClass);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = _possibleConstructorReturn(this, (_ref = SafeClass.__proto__ || Object.getPrototypeOf(SafeClass)).call.apply(_ref, [this].concat(args)));

      var handler = {
        get: _this._handleMethodMissing
      };
      return _ret = new Proxy(_this, handler), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SafeClass, [{
      key: "_handleMethodMissing",
      value: function _handleMethodMissing(target, name) {
        var origMethod = target[name];

        if (name in target || name === "methodMissing") {
          // If it exist, return original member or function.
          var isFunction = typeof origMethod === "function";
          return isFunction ? function () {
            return origMethod.apply(undefined, arguments);
          } : target[name];
        }

        // If the method doesn't exist, call methodMissing.
        return function () {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return this.methodMissing.apply(this, [name].concat(args));
        };
      }
    }]);

    return SafeClass;
  }(originalClass);
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMethodMissing = exports.MethodMissingClass = undefined;

var _MethodMissingClass = __webpack_require__(9);

var _MethodMissingClass2 = _interopRequireDefault(_MethodMissingClass);

var _WithMethodMissing = __webpack_require__(10);

var _WithMethodMissing2 = _interopRequireDefault(_WithMethodMissing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MethodMissingClass = _MethodMissingClass2.default;
exports.withMethodMissing = _WithMethodMissing2.default;

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MethodMissingClass = function () {
  function MethodMissingClass() {
    _classCallCheck(this, MethodMissingClass);

    var handler = {
      get: this._handleMethodMissing
    };
    return new Proxy(this, handler);
  }

  _createClass(MethodMissingClass, [{
    key: "_handleMethodMissing",
    value: function _handleMethodMissing(target, name) {
      var origMethod = target[name];

      if (name in target || name === "methodMissing") {
        // If it exist, return original member or function.
        var isFunction = typeof origMethod === "function";
        return isFunction ? function () {
          return origMethod.apply(undefined, arguments);
        } : target[name];
      }

      // If the method doesn't exist, call methodMissing.
      return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this.methodMissing.apply(this, [name].concat(args));
      };
    }
  }, {
    key: "methodMissing",
    value: function methodMissing(name) {
      console.log("Method \"" + name + "\" does not exist. Please override methodMissing method to add functionality.");
    }
  }]);

  return MethodMissingClass;
}();

exports.default = MethodMissingClass;

/***/ })

/******/ });
});