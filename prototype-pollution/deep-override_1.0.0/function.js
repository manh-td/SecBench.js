function exploitFunction(payload) {
  const deepOverride = require("deep-override");
  const target = {};
  deepOverride(target, payload);
  return target;
}

module.exports = { exploitFunction };