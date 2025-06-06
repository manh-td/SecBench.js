test("Path Traversal in zhaolei1111", async () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();
  let output = await exploitFunction(payload);

  // Read the flag file content for comparison
  const flagFilePath = path.resolve(__dirname, "../flag.html");
  const expectedContent = fs.readFileSync(flagFilePath).toString();

  // Verify the output
  expect(output).toBe(expectedContent);
});