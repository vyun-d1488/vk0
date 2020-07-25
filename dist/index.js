"use strict";

var _express = _interopRequireDefault(require("express"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT;
var app = (0, _express["default"])();
app.use("/api", require("./routes/index"));
app.use(_express["default"]["static"]("build"));
app.get("*", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
app.listen(PORT, function () {
  console.log("Listening on port: ".concat(PORT));
});