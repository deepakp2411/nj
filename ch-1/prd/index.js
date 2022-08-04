"use strict";

var express = require('express');

var app = express();
var port = 3000;
app.get('/', function (req, res) {
  res.send("hello Deepak kaise ho...? bewkoof kutta");
});
app.listen(port, function () {
  console.log("Server is running at http://localhost:".concat(port));
});