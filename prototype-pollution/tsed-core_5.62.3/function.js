function exploitFunction(payload) {
  const { deepExtends } = require("@tsed/core");
  const obj = {};
  const result = deepExtends(obj, payload);
  return result;
}

module.exports = { exploitFunction };