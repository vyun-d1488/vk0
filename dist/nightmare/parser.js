"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nightmare = _interopRequireDefault(require("nightmare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var nightmare = (0, _nightmare["default"])({
  show: false
});
nightmare["goto"]("https://vk.com/radicalmemers").wait(1000).scrollTo(999999999999999999999999999, 0).wait(1000).scrollTo(999999999999999999999999999, 0).wait(1000).scrollTo(999999999999999999999999999, 0).wait(1000).scrollTo(999999999999999999999999999, 0).wait(1000).scrollTo(999999999999999999999999999, 0).wait(1000).scrollTo(999999999999999999999999999, 0).wait(1000).scrollTo(999999999999999999999999999, 0).wait(1000).scrollTo(999999999999999999999999999, 0).wait(1000).scrollTo(999999999999999999999999999, 0).wait(1000).scrollTo(999999999999999999999999999, 0).wait(1000).scrollTo(999999999999999999999999999, 0).wait(1000).scrollTo(999999999999999999999999999, 0).wait(1000).scrollTo(999999999999999999999999999, 0).wait(1000).evaluate(function () {
  var elements = document.getElementsByClassName("page_post_thumb_wrap");
  var attributes = [];

  for (var i = 0; i < elements.length; i++) {
    attributes.push(elements[i].getAttribute("onclick"));
  }

  return attributes;
}).end();
var _default = nightmare;
exports["default"] = _default;