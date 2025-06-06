test("Path Traversal in rtcmulticonnection-client", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();
  const output = exploitFunction(payload);

  // Read the flag file content
  const flagContent = fs.readFileSync(require("../utils/pathToFlag")).toString();

  // Verify the output
  expect(output).toBe(flagContent);
});