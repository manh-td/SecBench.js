function exploitFunction(payload) {
  var a = require("monorepo-build");
  a.build("./", payload);
}

module.exports = { exploitFunction };