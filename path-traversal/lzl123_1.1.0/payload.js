const path = require("path");  // Import the path module

function getPayload() {
  return "/..".repeat(50) + path.resolve(__dirname, "../flag.html");
}

module.exports = { getPayload };