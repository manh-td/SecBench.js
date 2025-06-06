function getPayload() {
  const path = require('path');  // Import the path module
  const pathToFlag = path.resolve(__dirname, "../flag.html");
  function genstr(n) {
    return "/..".repeat(50) + pathToFlag;
  }
  return { pathToFlag, genstr };  // Return both pathToFlag and genstr
}

module.exports = { getPayload };