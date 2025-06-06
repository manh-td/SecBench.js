function exploitFunction(payload) {
  const merge = require("lutils-merge");
  const obj = {};
  merge(obj, payload);
  return obj;
}

module.exports = { exploitFunction };