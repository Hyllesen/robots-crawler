var robotsParser = require("robots-parser");

module.exports = function getRobotParser(
  urlToRobotsTxtFile,
  robotsTextContent
) {
  var robots = robotsParser(urlToRobotsTxtFile, robotsTextContent);
  return robots;
};
