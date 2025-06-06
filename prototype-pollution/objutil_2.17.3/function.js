function exploitFunction(payload) {
  const { merge } = require("objutil");

  let a = { x: 1, y: { w: 1, z: 2 } };
  let result = merge(a, JSON.parse(payload));

  return result;
}

module.exports = { exploitFunction };