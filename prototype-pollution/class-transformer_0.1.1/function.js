function exploitFunction(payload) {
  const root = require("class-transformer");
  root.classToPlainFromExist(payload, {});
}

module.exports = { exploitFunction };