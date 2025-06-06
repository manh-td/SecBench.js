test("ReDos in revalidator", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const measureTime = require("../utils").measureTime; // Ensure measureTime is required

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output.time).toBeGreaterThan(1);
});