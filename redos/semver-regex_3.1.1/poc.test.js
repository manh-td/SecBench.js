test("ReDos in revalidator", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const measureTime = require("../utils").measureTime; // Ensure measureTime is required here as well

  const payload = getPayload();
  let output = exploitFunction(...Object.values(payload));

  expect(output.time).toBeGreaterThan(1);
});