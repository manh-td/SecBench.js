function exploitFunction(payload) {
  const merge = require("deep-extend");

  const obj = {};
  merge(obj, payload);
  return obj;
}

module.exports = { exploitFunction };