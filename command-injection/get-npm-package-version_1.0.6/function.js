function exploitFunction(payload) {
  const a = require("get-npm-package-version");
  a(payload);
}

module.exports = { exploitFunction };