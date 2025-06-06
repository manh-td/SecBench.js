function exploitFunction(payload) {
  const fp = require("fast-json-patch");
  const obj = {};
  fp.applyPatch(obj, payload);
  return obj;
}

module.exports = { exploitFunction };