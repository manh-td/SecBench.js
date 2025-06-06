function exploitFunction(payload) {
  const predefine = require("predefine");
  predefine.merge({}, payload);
}

module.exports = { exploitFunction };