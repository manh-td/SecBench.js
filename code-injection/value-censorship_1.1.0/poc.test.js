test("Arbitrary code execution in value-censorship", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  // Require necessary modules

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Verify the output
  expect(Object.prototype.polluted).toBe("yes");
});