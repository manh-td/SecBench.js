function exploitFunction(module) {
  const root = require("npm-help");
  root.latestVersion(module);
}

module.exports = { exploitFunction };