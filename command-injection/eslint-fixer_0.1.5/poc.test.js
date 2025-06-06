test("Command Injection in eslint-fixer", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  // Require necessary modules
  const { expect } = require('expect');

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Verify the output
  expect(output).toBe(true); // The file should exist after the payload is executed
});