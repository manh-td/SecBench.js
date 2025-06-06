test("Prototype pollution in dotty", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const assert = require('assert');

  const payload = getPayload();
  let output = exploitFunction(payload);

  assert.strictEqual(output.polluted, "yes");
});