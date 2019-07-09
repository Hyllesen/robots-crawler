const robots = require("./robots");
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

async function getPageTextContent(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  const content = await page.content();
  const $ = cheerio.load(content);
  const robotsTxt = $("html").text();
  return robotsTxt;
}

async function main() {
  const robotTxtUrl = "http://craigslist.org/robots.txt";
  const robotsTxt = await getPageTextContent(
    "http://craigslist.org/robots.txt"
  );
  const robotsParser = robots(robotTxtUrl, robotsTxt);
}

main();
