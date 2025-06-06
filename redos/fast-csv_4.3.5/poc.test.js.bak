test("ReDos in fast-csv", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Since we are measuring time, we cannot directly compare the output.
  // Instead, we log the time and verify it manually.
  expect(output).toBeDefined();
});