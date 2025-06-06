function exploitFunction(payload) {
  const gammautils = require("gammautils");
  return gammautils.object.deepMerge({}, payload);
}

module.exports = { exploitFunction };