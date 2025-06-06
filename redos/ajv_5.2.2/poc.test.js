test("ReDoS in ajv", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let result = exploitFunction(payload.schema);

  expect(result).toBe(true); // or any other expected outcome
});