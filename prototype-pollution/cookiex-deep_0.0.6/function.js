function exploitFunction(payload) {
  const deep = require("@cookiex/deep");
  const target = {};
  deep.default(target, payload);
}

module.exports = { exploitFunction };