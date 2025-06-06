function exploitFunction(payload) {
  const flattenizer = require("flattenizer");
  flattenizer.unflatten(payload);
}

module.exports = { exploitFunction };