test("prototype pollution in predefine", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  // Require necessary modules
  const payload = getPayload();
  exploitFunction(payload);

  expect({}.polluted).toBe("yes");
});