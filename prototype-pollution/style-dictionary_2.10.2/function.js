function exploitFunction(payload) {
  const StyleDictionary = require("style-dictionary");
  const opts = payload;

  StyleDictionary.extend(opts);
}

module.exports = { exploitFunction };