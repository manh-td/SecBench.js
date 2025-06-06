test("prototype pollution in deeps", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  // Create an empty object to test
  const obj = {};

  // Get the payload
  const payload = getPayload();

  // Exploit the vulnerability
  payload.setPrototypePollution(obj);

  // Verify the output
  expect(obj.polluted).toBe("yes");
});