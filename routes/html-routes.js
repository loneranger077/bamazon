var express = require("express");
var path = require("path");

var app = express();

module.exports = function(app) {

  app.get("/order", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/html/order.html"));
  });

  app.get("/receipt", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/html/receipt.html"));
  }); 

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/html/index.html"));
  });

}