test("Path Traversal in serverzyy", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const path = require("path");  // Ensure necessary modules are required at the beginning

  const payload = getPayload();
  let output = exploitFunction(payload);  // Pass the payload to exploitFunction

  // Verify the output
  expect(output.out).toBe(true);
});

// Ensure necessary modules are required at the beginning
const { sleep } = require("sleep");