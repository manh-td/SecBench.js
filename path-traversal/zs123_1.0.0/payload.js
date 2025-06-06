const path = require("path"); // Import the path module

function getPayload() {
  function genstr(n) {
    return "/..".repeat(50) + path.resolve(__dirname, "../flag.html");
  }
  return {
    genstr
  };
}

module.exports = { getPayload };