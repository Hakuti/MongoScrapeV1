//The SCRAPE.JS IS A BORROWED SOLUTION
//ROUTING AND UTILIZING A NON-HANDLEBARS SOLUTION CODE IS MY CODE
//SOME CODE IS BORROWING FROM CATS CONTROLLER EXAMPLE

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
// app.use();
var routes = require("./routes");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");
mongoose.connect(
  "mongodb://localhost/mongoHeadlines",
  { useNewUrlParser: true }
);

// var MONGODB_URI = "mongodb://localhost:27017/config";

// Import routes and give the server access to them.
// var routes = require("./routes");

app.use(routes);
app.use(express.static("public"));

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
