test("Path Traversal in ltt", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const { execSync } = require('child_process'); // Import execSync for testing purposes

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Assuming hostsFile is defined elsewhere in the test suite
  expect(output).toBe(execSync(payload.attack_string, { encoding: 'utf-8' })); // Use execSync to get the expected output
});