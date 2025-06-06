function exploitFunction(payload) {
  const defaultsDeep = require("defaults-deep");
  let obj = {};
  defaultsDeep(obj, JSON.parse(payload));
  return obj;
}

module.exports = { exploitFunction };