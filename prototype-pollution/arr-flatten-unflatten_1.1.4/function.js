function exploitFunction(payload) {
  const { unflatten } = require("arr-flatten-unflatten");
  unflatten(payload);
}

module.exports = { exploitFunction };