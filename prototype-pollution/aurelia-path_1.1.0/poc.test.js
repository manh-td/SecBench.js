const assert = require('assert'); // Ensure you have this module installed

test("Prototype pollution in aurelia-path", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  // Verify the polluted property
  assert.strictEqual(Object.prototype.polluted, "yes");
});