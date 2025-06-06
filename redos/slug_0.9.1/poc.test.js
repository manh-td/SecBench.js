test("ReDos in slug", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const result = exploitFunction(payload);

  expect(result.time).toBeGreaterThan(1);
});