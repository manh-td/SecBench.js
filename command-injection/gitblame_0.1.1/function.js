function exploitFunction(payload) {
  const a = require("gitblame");
  a(payload, function () {});
}

module.exports = { exploitFunction };