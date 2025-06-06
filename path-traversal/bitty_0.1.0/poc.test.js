test("Path Traversal in bitty", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const path = require("path");  // Import the path module

  const payload = getPayload();
  let output = exploitFunction(payload);  // Pass payload directly

  // Verify the output
  expect(output.stdout).toBe(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString());
});

// Ensure fs module is required for reading the file
const fs = require('fs');