test("Path Traversal in yzt", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(...Object.values(payload));

  // Verify the output
  expect(output).toBe("This is the content of the flag file");
});