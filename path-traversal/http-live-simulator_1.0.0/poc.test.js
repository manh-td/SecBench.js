test("Path Traversal in http-live-simulator", async () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const stdout = await exploitFunction(payload);

  // Read the expected flag content
  const expectedContent = fs.readFileSync(payload).toString();

  // Verify the output
  expect(stdout).toBe(expectedContent);
});