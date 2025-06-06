test("Path Traversal in ussasasa", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();

  // Require necessary modules
  const expect = require("expect");
  const fs = require("fs");

  // Execute the exploit function
  exploitFunction(payload);

  // Read the flag file content
  const hostsFile = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

  // Verify the output
  expect(stdout).toBe(hostsFile);
});