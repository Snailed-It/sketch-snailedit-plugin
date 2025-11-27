var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/rename-screenshots.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/rename-screenshots.js":
/*!***********************************!*\
  !*** ./src/rename-screenshots.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var UI = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI;
var formats = ['Device', 'Combined', 'Partial', 'Press', 'AppStore'];
var devices = ['iPhone', 'iPad'];
var iphoneModels = ['iPhone_17_Pro', 'iPhone_16_Pro', 'iPhone_15_Pro'];
var ipadModels = ['iPad_Pro_M5_13inch', 'iPad_Pro_M4_13inch', 'iPad_Air_M2_11inch'];
var types = ['Framed', 'Raw'];
var apps = ['Capsule', 'Logger', 'Toolbox_Pro', 'Pushcut', 'Nautomate', 'Menu_Box'].sort();
function stripIncorrectSuffix(name) {
  var allModels = [].concat(iphoneModels, ipadModels);
  var _iterator = _createForOfIteratorHelper(allModels),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var model = _step.value;
      if (name.endsWith("_".concat(model, "_Dark"))) return name.replace("_".concat(model, "_Dark"), '');
      if (name.endsWith("_".concat(model, "_Light"))) return name.replace("_".concat(model, "_Light"), '');
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (name.endsWith('_Dark')) return name.slice(0, -5);
  if (name.endsWith('_Light')) return name.slice(0, -6);
  return name;
}
function renameLayers(selectedLayers, format, device, model, type, app) {
  var prefix = '';
  var correctDarkSuffix = "_".concat(model, "_Dark");
  var correctLightSuffix = "_".concat(model, "_Light");
  switch (format) {
    case 'Device':
      prefix = "".concat(app, "_Screenshots/").concat(device, "/").concat(model, "/").concat(type, "/").concat(app, "_");
      break;
    case 'Combined':
      prefix = "".concat(app, "_Screenshots/Combined/").concat(app, "_");
      break;
    case 'Partial':
      prefix = "".concat(app, "_Screenshots/Partial/").concat(app, "_");
      break;
    case 'Press':
      prefix = "".concat(app, "_Screenshots/Press/").concat(model, "/").concat(type, "/").concat(app, "_");
      break;
    case 'AppStore':
      prefix = "".concat(app, "_Screenshots/AppStore/").concat(device, "/").concat(app, "_");
      break;
  }
  var useLightDark = format !== 'AppStore';
  selectedLayers.forEach(function (layer, i) {
    var originalName = layer.name;
    var name = stripIncorrectSuffix(originalName);
    var appPrefixPattern = new RegExp("^".concat(app, "_"), 'i');
    name = name.replace(appPrefixPattern, '');
    if (!name.startsWith(prefix)) {
      name = prefix + name;
    }
    if (useLightDark) {
      if (/_Dark$/.test(originalName)) {
        name += correctDarkSuffix;
      } else if (/_Light$/.test(originalName)) {
        name += correctLightSuffix;
      }
    }
    if (name !== layer.name) {
      layer.name = name;
      console.log("".concat(i + 1, ". Renamed \"").concat(originalName, "\" \u2192 \"").concat(name, "\""));
    } else {
      console.log("".concat(i + 1, ". Skipped \"").concat(name, "\" (already correct)"));
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var document = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
  var selectedLayers = document.selectedLayers;
  if (selectedLayers.length === 0) {
    UI.message('No layers selected. Please select layers before running the plugin.');
    return;
  }
  UI.getInputFromUser('Select format type', {
    type: UI.INPUT_TYPE.selection,
    possibleValues: formats
  }, function (errFormat, selectedFormat) {
    if (errFormat) return console.log('Cancelled format selection.');
    UI.getInputFromUser('Select app', {
      type: UI.INPUT_TYPE.selection,
      possibleValues: apps
    }, function (errApp, selectedApp) {
      if (errApp) return console.log('Cancelled app selection.');
      var askDevice = ['Device', 'AppStore'].includes(selectedFormat);
      var askModel = ['Device', 'Press'].includes(selectedFormat);
      var askType = ['Device', 'Press'].includes(selectedFormat);
      var getDevice = askDevice ? function (cb) {
        return UI.getInputFromUser('Select device', {
          type: UI.INPUT_TYPE.selection,
          possibleValues: devices
        }, function (err, val) {
          if (err) return console.log('Cancelled device selection.');
          cb(val);
        });
      } : function (cb) {
        return cb('');
      };
      var getModel = function getModel(device, cb) {
        return askModel ? UI.getInputFromUser("Select ".concat(device || 'device', " model"), {
          type: UI.INPUT_TYPE.selection,
          possibleValues: device === 'iPad' ? ipadModels : iphoneModels
        }, function (err, val) {
          if (err) return console.log('Cancelled model selection.');
          cb(val);
        }) : cb('');
      };
      var getType = function getType(cb) {
        return askType ? UI.getInputFromUser('Select type', {
          type: UI.INPUT_TYPE.selection,
          possibleValues: types
        }, function (err, val) {
          if (err) return console.log('Cancelled type selection.');
          cb(val);
        }) : cb('');
      };
      getDevice(function (device) {
        getModel(device, function (model) {
          getType(function (type) {
            renameLayers(selectedLayers.layers, selectedFormat, device, model, type, selectedApp);
            UI.message('Layer renaming complete.');
          });
        });
      });
    });
  });
});

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['default'] = __skpm_run.bind(this, 'default');
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=__rename-screenshots.js.map