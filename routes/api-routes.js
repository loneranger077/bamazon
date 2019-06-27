var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {


  app.post("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/api/api.js"));
  });

  app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/api/api.js"));
  });
}