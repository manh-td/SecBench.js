test("Prototype pollution in sds", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const obj = {};

  // Exploit the vulnerability
  const pollutedObj = exploitFunction(obj, payload, true);

  // Verify the output
  expect(pollutedObj.polluted).toBe(true);
});