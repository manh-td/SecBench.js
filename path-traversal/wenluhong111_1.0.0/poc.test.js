test("Path Traversal in wenluhong111", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(...Object.values(payload));

  // Verify the output
  expect(output).toBe(true);
});