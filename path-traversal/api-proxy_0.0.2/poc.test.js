test("Path Traversal in api-proxy", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  // Require necessary modules

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Verify the output
  expect(output).toBe(fs.readFileSync(payload).toString());
  done();
});

// Ensure you have required the necessary modules at the top of your test file
const path = require("path");
const fs = require("fs");