test("Prototype pollution in tree-kit", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const assert = require('assert');

  const obj = getPayload();
  exploitFunction(obj);

  assert.strictEqual(obj.polluted, "yes");
});