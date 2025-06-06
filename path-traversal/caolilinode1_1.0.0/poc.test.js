test("Path Traversal in caolilinode1", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const { execSync } = require("child_process");
  const fs = require("fs");

  // Read the flag file content
  const flagContent = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

  // Get the payload
  const payload = getPayload();

  // Call the exploit function and get the output
  const output = exploitFunction(payload);

  // Verify the output
  expect(output).toBe(flagContent);
});