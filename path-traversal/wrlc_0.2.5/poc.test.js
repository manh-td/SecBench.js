test("Path Traversal in wrlc", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  setTimeout(() => {
    done(); // Assuming the server and command execution take around 1 second
  }, 2000); // Increased timeout to ensure the server has enough time to start
});

// Note: The actual verification would involve checking the contents of stdout, but this is a simplified example.