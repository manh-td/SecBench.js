test("Path Traversal in lzl123", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const path = require("path");  // Import the path module
  const fs = require("fs");

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Read the flag file content
  const flagContent = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

  // Verify the output
  expect(output).toBe(flagContent);
  done();
});

// Note: Ensure you have the necessary imports at the top of your test file
const { sleep } = require("sleep");