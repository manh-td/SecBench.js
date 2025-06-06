test("Command Injection in xopen", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const { expect } = require('expect');  // Ensure expect is required here

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Verify the output
  expect(fs.existsSync("./xopen")).toBe(true);
});