function exploitFunction(payload) {
  const a = require("curljs");
  a(payload, function () {});
}

module.exports = { exploitFunction };