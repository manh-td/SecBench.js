function exploitFunction(payload) {
  var extend = require("smart-extend");
  var obj = {};
  extend.deep(obj, JSON.parse(payload));
}

module.exports = { exploitFunction };