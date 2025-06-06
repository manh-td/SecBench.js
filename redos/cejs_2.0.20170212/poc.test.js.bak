test("ReDoS in cejs", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const { measureTime } = require("../utils");

  const payload = getPayload();
  const result = exploitFunction(payload);

  const time = result.time;
  expect(time).toBeGreaterThan(1);
});