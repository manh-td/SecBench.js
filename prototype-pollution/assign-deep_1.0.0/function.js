function exploitFunction(payload) {
  const assign = require("assign-deep");

  var obj = {};
  assign(obj, JSON.parse(payload[0]));
  return obj;
}

module.exports = { exploitFunction };