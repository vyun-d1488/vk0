"use strict";

var _express = _interopRequireDefault(require("express"));

var _parser = require("../nightmare/parser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express["default"].Router();

router.get("/get_img", function (req, res) {
  var nightmare = (0, _parser.run)();
  nightmare.then( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(result) {
      var str_JSON, i;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              str_JSON = [];
              i = 0;

            case 2:
              if (!(i < result.length)) {
                _context.next = 19;
                break;
              }

              _context.prev = 3;
              _context.t0 = str_JSON;
              _context.t1 = JSON;
              _context.next = 8;
              return result[i].substring(result[i].indexOf("{"), result[i].lastIndexOf("}") + 1);

            case 8:
              _context.t2 = _context.sent;
              _context.t3 = _context.t1.parse.call(_context.t1, _context.t2).temp.x;

              _context.t0.push.call(_context.t0, _context.t3);

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t4 = _context["catch"](3);
              return _context.abrupt("continue", 16);

            case 16:
              i++;
              _context.next = 2;
              break;

            case 19:
              res.send(str_JSON);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 13]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});
module.exports = router;