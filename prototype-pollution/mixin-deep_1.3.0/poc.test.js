test("Prototype pollution in mixin-deep", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Verify the output
  expect({}.polluted).toBe("yes");
});