test("Path Traversal in songcaihong", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  // Get the payload
  const payload = getPayload();

  // Run the exploit function
  exploitFunction(payload);

  // Wait for the function to complete and then call done()
  setTimeout(() => {
    done();
  }, 3000); // Adjust the timeout as needed
});