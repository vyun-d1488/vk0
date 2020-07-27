"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;

var _nightmare = require("./nightmare");

function run() {
  _nightmare.nightmare.scrollTo(999999999999999999999999999, 0).evaluate(function () {
    var elements = document.getElementsByClassName("page_post_thumb_wrap");
    var attributes = [];

    for (var i = 0; i < elements.length; i++) {
      attributes.push(elements[i].getAttribute("onclick"));
    }

    return attributes;
  });

  return _nightmare.nightmare;
}