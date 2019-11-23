require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
var app = express();
const rutas = require("./routes")(app);
let port=process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.listen(port, () => {
  console.log("Server Online");
});
