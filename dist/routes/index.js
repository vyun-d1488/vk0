"use strict";

var _express = _interopRequireDefault(require("express"));

var _parser = _interopRequireDefault(require("../nightmare/parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/get_img", function (req, res) {
  _parser["default"].then(function (result) {
    var str_JSON = [];

    for (var i = 0; i < result.length; i++) {
      str_JSON.push(JSON.parse(result[i].substring(result[i].indexOf("{"), result[i].lastIndexOf("}") + 1)).temp);
    }

    res.send(str_JSON);
  });
});
module.exports = router;