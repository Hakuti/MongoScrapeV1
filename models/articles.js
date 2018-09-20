const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  headline: { type: String, required: true },
  summary: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date, default: Date.now },
  saved: { type: Boolean, default: false }
});

const Article = mongoose.model("Article", articlesSchema);

module.exports = Article;
