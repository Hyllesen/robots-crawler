const puppeteer = require("puppeteer");

async function getPageTextContent(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForNavigation();
  const content = await page.content();
  return content;
}

module.exports = { getPageContent };
