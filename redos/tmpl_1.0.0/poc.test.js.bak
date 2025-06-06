test("ReDoS in revalidator", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const measureTime = require("../utils").measureTime;

  const payload = getPayload().payload;
  let result = exploitFunction(payload);

  expect(result.time).toBeGreaterThan(1);
});