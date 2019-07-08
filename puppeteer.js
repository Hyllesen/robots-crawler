const puppeteer = require("puppeteer");

async function main() {
  const url = "https://sfbay.craigslist.org/robots.txt";
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
}

main();
