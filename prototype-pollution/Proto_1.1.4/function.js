function exploitFunction(payload) {
  const proto = require("Proto");
  const obj = {};
  proto.merge(obj, JSON.parse(payload));
  return obj;
}

module.exports = { exploitFunction };