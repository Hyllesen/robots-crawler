const cheerio = require("cheerio");
const webscraper = require("./webscraper");

// 1. Visit site, get content
// 2. Get all URL's of site
// 3. Save the visited sites url and content in database
// 4. Go to step 1, with new URLs from visited sites content.

async function main(startUrl) {
  const content = await webscraper.getPageContent(startUrl);
  await SaveCrawlResult(startUrl, content);
  const $ = cheerio.load(content);
  const allLinks = $("a")
    .map((index, element) => $(element).attr("href"))
    .get();
  const cleanLinks = filteredLinks(allLinks);
  return cleanLinks;
  //   fs.writeFileSync("./links.txt", cleanLinks.join("\n"));
}

function filteredLinks(allLinksRaw) {
  const regex = /^\/[^\/]/gm;
  return allLinksRaw.filter(link => regex.test(link));
}

main("https://sfbay.craigslist.org/");
