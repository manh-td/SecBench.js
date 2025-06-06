test("Path Traversal in @vivaxy/here", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const path = require("path");
  const fs = require("fs");

  // Generate the payload
  const payload = getPayload();

  // Execute the exploit function
  const output = exploitFunction(payload);

  // Verify the output
  expect(output).toBe(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString());
});