const mongoose = require("mongoose");

const url = "mongodb://crawleruser:crawlz1@ds249127.mlab.com:49127/crawler";

const connection = mongoose.connect(url, { useNewUrlParser: true });

module.exports = connection;
