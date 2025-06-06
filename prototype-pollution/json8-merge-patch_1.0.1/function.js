function exploitFunction(payload) {
  const json8mergepatch = require("json8-merge-patch");
  const target = {};
  json8mergepatch.apply(target, payload);
  return target;
}

module.exports = { exploitFunction };