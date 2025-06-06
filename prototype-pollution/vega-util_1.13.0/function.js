function exploitFunction(config, payload) {
  const util = require("vega-util");
  util.mergeConfig(config, JSON.parse(payload));
}

module.exports = { exploitFunction };