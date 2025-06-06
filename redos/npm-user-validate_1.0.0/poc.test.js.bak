test("ReDos in npm-user-validate", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const output = exploitFunction(payload);

  expect(output.time).toBeGreaterThan(1);
});