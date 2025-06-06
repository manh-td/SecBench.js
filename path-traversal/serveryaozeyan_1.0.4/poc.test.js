test("Path Traversal in serveryaozeyan", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Read the flag file content for verification
  const path = require("path");
  const fs = require("fs");
  const flagContent = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

  // Verify the output
  expect(output).toBe(flagContent);
});