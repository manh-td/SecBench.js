test("ReDos in hosted-git-info", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output.time).toBeGreaterThan(1);
  expect(output.parsedInfo).toBeDefined(); // Ensure parsedInfo is defined
});