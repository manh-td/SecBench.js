test("Path Traversal in sgqserve", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload);  // Pass the payload directly

  expect(output).toBe(true);
});