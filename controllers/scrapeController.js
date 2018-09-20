var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
  scrapeResults: function(req, res) {
    //Scrape for articles
    //var scraped = scrape();
    // return scrape().then(data => {
    // console.log(data);
    //   //   db.Article.create(data);
    //   return db.Article.create({
    //     headline: "Listen to the Daily",
    //     summary: "Do you have",
    //     url: "http:"
    //   });
    // });
    return scrape().then(data => {
      //console.log(db.Article);
      db.Article.create(data);
    });
  }
};
