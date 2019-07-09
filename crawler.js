const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs");

async function main(startUrl) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(startUrl);
  const $ = cheerio.load(await page.content());
  const allLinks = $("a")
    .map((index, element) => $(element).attr("href"))
    .get();
  console.log(allLinks);
  const cleanLinks = filteredLinks(allLinks);
  fs.writeFileSync("./links.txt", cleanLinks.join("\n"));
}

function filteredLinks(allLinksRaw) {
  const regex = /^\/[^\/]/gm;
  return allLinksRaw.filter(link => regex.test(link));
}

main("https://sfbay.craigslist.org/");
