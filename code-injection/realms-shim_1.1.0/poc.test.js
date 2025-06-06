test("Arbitrary code execution in realms-shim", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect({}.polluted).toBe("yes");
});