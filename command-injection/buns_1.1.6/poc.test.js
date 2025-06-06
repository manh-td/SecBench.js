test("Command Injection in buns", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const { expect } = require('expect'); // Ensure expect is required here

  const payload = getPayload();
  exploitFunction(payload);

  // Verify the output
  expect(fs.existsSync("./buns")).toBe(true);
});