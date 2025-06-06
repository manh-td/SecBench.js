function exploitFunction(payload) {
  const jsExtend = require("js-extend");
  jsExtend.extend({}, payload);
}

module.exports = { exploitFunction };