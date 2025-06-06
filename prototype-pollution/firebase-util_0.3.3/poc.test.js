test("Prototype pollution in @firebase/util", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const result = exploitFunction(payload);

  // Ensure the result does not cause a timeout
  expect(result.nest).toHaveProperty("polluted", "yes");

  // Verify that the prototype pollution did not affect other properties
  expect({}.polluted).toBeUndefined();
});