test("Path Traversal in wintiwebdev", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Read the flag file content
  const hostsFile = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

  // Verify the output
  expect(output).toBe(hostsFile);
});