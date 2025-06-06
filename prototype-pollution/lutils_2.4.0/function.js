function exploitFunction(payload) {
  const lt = require("lutils");
  let obj = {};
  lt.merge(obj, payload);
}

module.exports = { exploitFunction };