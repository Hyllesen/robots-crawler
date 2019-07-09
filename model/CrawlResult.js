const mongoose = require("mongoose");

const CrawlResultSchema = new mongoose.Schema({ url: String, content: String });

const CrawlResult = mongoose.model("CrawlResult", CrawlResultSchema);

module.exports = CrawlResult;
