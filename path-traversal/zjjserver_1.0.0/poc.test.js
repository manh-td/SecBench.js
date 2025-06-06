test("Path Traversal in zjjserver", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Verify the output
  expect(output).toBe(true);
});