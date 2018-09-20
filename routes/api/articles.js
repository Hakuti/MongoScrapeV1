const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");
const scrapeController = require("../../controllers/scrapeController");

//Find all unsaved articles
router.get("/", articlesController.findUnsaved);

//Delete all articles in database
router.delete("/", articlesController.deleteAll);

router.get("/scraped", scrapeController.scrapeResults);

router.put("/updateSaved/:id", articlesController.update);
//Find all saved articles
// router.get("/savedArticles", articlesController.findSaved);

//Update and add to save
// router.put("/update/:id", articlesController.update);

module.exports = router;
