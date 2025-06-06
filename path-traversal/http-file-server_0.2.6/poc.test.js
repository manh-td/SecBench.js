test("Path Traversal in http-file-server", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload);  // Pass the payload directly

  expect(output).toBeDefined();
  expect(output).toBeTruthy();
});