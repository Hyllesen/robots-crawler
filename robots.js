var robotsParser = require("robots-parser");

var robots = robotsParser(
  "https://sfbay.craigslist.org/robots.txt",
  [
    "User-agent: *",
    "Disallow: /reply",
    "Disallow: /fb/",
    "Disallow: /suggest",
    "Disallow: /flag",
    "Disallow: /mf",
    "Disallow: /eaf",
    "Disallow: /*.html?lang="
  ].join("\n")
);

module.exports = robots;
