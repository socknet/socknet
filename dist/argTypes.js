'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* @class ArgTypes
* @desc Arguments type validation
*/

var ArgTypes = function () {
  function ArgTypes() {
    _classCallCheck(this, ArgTypes);
  }

  _createClass(ArgTypes, null, [{
    key: 'objectOf',


    /**
    * @type {Function}
    * @param {?Object} definition - How the object should look like can be null
    * @desc Object validation
    * @return {ArgType}
    */


    /**
    * @typedef {Object} ArgType
    * @property {String} errorMessage - The error message to return for identify error
    * @property {Function} validationFn - The function that validate the data type
    * @property {?Object|Array} data - The data definitions if object and array
    */

    /**
    * @type {ArgType}
    * @desc Integer validation
    */
    value: function objectOf(definition) {
      return {
        definition: definition,
        errorMessage: 'an object',
        validationFn: function validationFn(data) {
          return !_lodash2.default.isArray(data) && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object';
        }
      };
    }

    /**
    * @type {Function}
    * @param {?Array} definition - How the array should look like can be null
    * @return {ArgType}
    * @desc Array validation
    */


    /**
    * @type {ArgType}
    * @desc Integer validation
    */

  }, {
    key: 'arrayOf',
    value: function arrayOf(definition) {
      return {
        definition: definition,
        errorMessage: 'an array',
        validationFn: _lodash2.default.isArray
      };
    }
  }]);

  return ArgTypes;
}();

ArgTypes.integer = {
  errorMessage: 'an integer',
  validationFn: _lodash2.default.isInteger };
ArgTypes.string = {
  errorMessage: 'a string',
  validationFn: function validationFn(data) {
    return typeof data === 'string';
  } };
exports.default = ArgTypes;