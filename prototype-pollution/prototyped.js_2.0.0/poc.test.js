test("Prototype pollution in merge-recursive", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  // Verify the output
  expect({}).toHaveProperty("__proto__.isAdmin", true);
});