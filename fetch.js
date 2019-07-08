const fetch = require("node-fetch");

fetch("https://sfbay.craigslist.org/robots.txt", {
  credentials: "include",
  headers: {
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
    "accept-language": "en-US,en;q=0.9,da;q=0.8",
    "cache-control": "no-cache",
    "cookie-installing-permission": "required",
    pragma: "no-cache",
    "upgrade-insecure-requests": "1"
  },
  referrerPolicy: "no-referrer-when-downgrade",
  body: null,
  method: "GET",
  mode: "cors"
}).then(response => console.log(response));
