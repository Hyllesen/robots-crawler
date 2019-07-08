var robotsParser = require("robots-parser");
const request = require("request-promise").defaults({
  followAllRedirects: true,
  followRedirect: true,
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36",
    "Accept-Encoding": "gzip, deflate, br",
    Host: "sfbay.craigslist.org",
    "Upgrade-Insecure-Requests": 1,
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
    "Cache-Control": "max-age=0",
    Connection: "keep-alive",
    Pragma: "no-cache",
    "Accept-Language": "en-US,en;q=0.9,da;q=0.8"
  },
  jar: false,

  gzip: true
});

async function main() {
  try {
    const robotsTxt = await request.get(
      "https://sfbay.craigslist.org/robots.txt"
    );
    console.log(robotsTxt);
  } catch (err) {
    console.error(err);
  }
}

main();
