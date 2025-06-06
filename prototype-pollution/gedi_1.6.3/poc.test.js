test("Prototype pollution in gedi", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  // Require necessary modules

  const payload = getPayload();
  exploitFunction();

  expect({}.polluted).toBe("yes");
});