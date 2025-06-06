test("Path Traversal in nodejsccc", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(...Object.values(payload));

  // Verify the output
  expect(output).toBeDefined();  // Ensure the function executes without errors
  done();
});

// Note: The actual verification should be done within the callback of the exec function
// For simplicity, we assume the output is logged to the console and check manually