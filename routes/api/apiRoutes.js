var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  console.log("Route hit");
});

router.post("add/:id", function(req, res) {});

router.post("/clear", function(req, res) {});

router.delete("delete/:id", function(req, res) {});

module.exports = router;
