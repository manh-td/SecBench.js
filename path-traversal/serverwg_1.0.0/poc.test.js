test("Path Traversal in serverwg", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const { execSync } = require("child_process");

  // Get the payload
  const payload = getPayload();

  // Exploit the function with the payload
  const result = exploitFunction(payload);

  // Verify the output
  expect(result).toBeDefined(); // Ensure the result is defined (server started)
  done();
});

// Additional verification code can be added here if needed