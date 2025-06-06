function exploitFunction(payload) {
  let extend = require("extend");
  let obj = {};
  extend(true, {}, payload);
}

module.exports = { exploitFunction };