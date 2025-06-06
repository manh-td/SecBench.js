function exploitFunction(obj1, obj2) {
  const { mergeDeep } = require("utilitify");
  return mergeDeep(obj1, obj2);
}

module.exports = { exploitFunction };