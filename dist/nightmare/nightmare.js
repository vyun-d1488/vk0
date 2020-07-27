"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nightmare = void 0;

var _nightmare = _interopRequireDefault(require("nightmare"));

var nightmare = (0, _nightmare["default"])({
  show: false
});
exports.nightmare = nightmare;
nightmare["goto"]("https://vk.com/radicalmemers");