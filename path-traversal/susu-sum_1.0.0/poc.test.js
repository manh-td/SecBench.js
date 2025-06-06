test("Path Traversal in susu-sum", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  // Require necessary modules

  const payload = getPayload();
  exploitFunction(payload, done);  // Pass the payload and the done callback

  // Wait for the function to complete and call done when it does
  setTimeout(() => {
    done();
  }, 5000); // Adjust timeout as needed
});

// Ensure the output matches the flag file content