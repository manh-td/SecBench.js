test("Path Traversal in angular-http-server", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output).toBe(payload);
});