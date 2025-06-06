function exploitFunction(payload) {
  var mixer = require("supermixer");
  var obj = {};
  mixer.merge({}, JSON.parse(payload));
  return obj;
}

module.exports = { exploitFunction };