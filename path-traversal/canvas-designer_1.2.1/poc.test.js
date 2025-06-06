test("Path Traversal in canvas-designer", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  // Ensure the payload is generated correctly
  const payload = getPayload();
  exploitFunction(payload, done); // Pass the payload to exploitFunction

  // Verify the output
  expect(done).toHaveBeenCalled(); // Ensure the done callback is called
});

// Note: The done callback is used to signal the end of the test.