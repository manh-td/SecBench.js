test("Path Traversal in fsk-server", async () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = await exploitFunction(payload);

  // Verify the output
  expect(output).toContain('Expected flag content'); // Replace with actual flag content
});

afterAll(() => {
  try {
    execSync("fuser -k 3001/tcp");
  } catch (e) {}
});