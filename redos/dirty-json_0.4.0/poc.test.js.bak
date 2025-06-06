test("ReDoS in dirty-json", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const { measureTime } = require("../utils");

  const payload = getPayload();
  const result = exploitFunction(payload.jsonInput);

  expect(result.time).toBeGreaterThan(1);
});