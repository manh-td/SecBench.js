test("Prototype pollution in nested-object-assign", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const result = exploitFunction(payload);

  expect(result.polluted).toBe("yes");
});