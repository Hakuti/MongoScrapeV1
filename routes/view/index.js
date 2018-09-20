const path = require("path");
var db = require("../../models");
const router = require("express").Router();

//API Routes
router.get("/", function(req, res) {
  //   res.render("index");
  res.sendFile(path.join(__dirname, "../../public/views/index.html"));
});

//If no API routes
router.get("/saved", function(req, res) {
  //   res.render("saved");
  res.sendFile(path.join(__dirname, "../../public/views/saved.html"));
});

module.exports = router;
