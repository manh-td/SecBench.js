function exploitFunction(payload) {
  const merge = require("merge");
  const obj1 = { x: { y: 1 } };
  merge.recursive(obj1, payload);
  return obj1;
}

module.exports = { exploitFunction };