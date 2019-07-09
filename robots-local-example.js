const fs = require("fs");
var robotsParser = require("robots-parser");

function main() {
  const result = fs.readFileSync("./robots.txt").toString();
  const parser = robotsParser(
    "https://sfbay.craigslist.org/robots.txt",
    result
  );
  console.log(
    parser.isAllowed(
      "https://sfbay.craigslist.org/d/politics/search/pol",
      "Stefans Bot 0.1"
    )
  );
  console.log(
    parser.isAllowed("https://sfbay.craigslist.org/", "Stefans Bot 0.1")
  );
  console.log(parser.isAllowed("https://google.com/", "Stefans Bot 0.1"));
  console.log(
    parser.isDisallowed("https://sfbay.craigslist.org/reply", "Stefans Bot 0.1")
  );
}

main();
