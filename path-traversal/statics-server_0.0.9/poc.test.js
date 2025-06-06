test("Path Traversal in statics-server", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const { exec } = require("child_process");  // Ensure exec is available

  const payload = getPayload();
  exploitFunction(payload);

  // The actual verification should be handled within the test itself.
});