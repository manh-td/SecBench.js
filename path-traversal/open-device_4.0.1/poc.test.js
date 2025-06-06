test("Path Traversal in open-device", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  // Require necessary modules
  const fs = require("fs");
  const path = require("path");
  const { sleep } = require("sleep");

  // Generate the payload
  const payload = getPayload();

  // Exploit the function with the payload
  const result = exploitFunction(payload);

  // Read the flag file content
  const hostsFile = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

  // Verify the output
  expect(result).toBe(hostsFile);
  done();
});