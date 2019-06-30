var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/html/index.html"));
  });

  app.get("/order", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/html/order.html"));
  });

  app.get("/receipt", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/html/receipt.html"));
  });
}