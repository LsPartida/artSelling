const express = require("express");
const bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("./routes")(app);
app.listen(8080, () => {
  console.log("Server Online");
});
