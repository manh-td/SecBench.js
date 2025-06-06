test("Path Traversal in dcdcdcdcdc", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const path = require('path'); // Import the path module

  const payload = getPayload();
  let output = exploitFunction(payload.genstr);

  // Since this is an async operation, we cannot directly verify the output here.
  // The test should be run in a way that captures the console output or uses a callback mechanism.
  expect(output).toBe("Exploit successful!");
});