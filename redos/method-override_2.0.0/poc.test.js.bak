test("ReDos in method-override", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  // Require necessary modules

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output).toBeGreaterThan(1);
});