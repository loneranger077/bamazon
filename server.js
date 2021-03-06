var express = require('express');
const path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/public/html"));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});