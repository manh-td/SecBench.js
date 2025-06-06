test("Command Injection in portprocesses", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const { expect } = require('expect'); // Correctly import the expect module

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Verify the output
  expect(output).toBe(true); // Adjust as needed based on the actual output
});