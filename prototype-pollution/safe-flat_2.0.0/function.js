function exploitFunction(payload) {
  const safeFlat = require("safe-flat");
  const obj = {};
  
  safeFlat.unflatten(payload, ".");
}

module.exports = { exploitFunction };