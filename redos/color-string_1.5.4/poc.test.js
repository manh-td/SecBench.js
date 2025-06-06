test("ReDoS in color-string", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  // Require necessary modules

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output.time).toBeGreaterThan(1);
});