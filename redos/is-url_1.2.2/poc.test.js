test("ReDos in is-url", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  // Require necessary modules

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Verify the output
  expect(output).toBeGreaterThan(1);
});