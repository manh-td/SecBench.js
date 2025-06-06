test("ReDos in revalidator", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const measureTime = require("../utils").measureTime;
  const Papa = require("papaparse");

  const payload = getPayload();
  const result = exploitFunction(payload.input);

  expect(result.time).toBeGreaterThan(1);
});