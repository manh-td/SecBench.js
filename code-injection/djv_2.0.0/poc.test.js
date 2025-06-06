test("Arbitrary code execution in djv", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const output = exploitFunction(payload.pollutePrototype);

  expect(output.polluted).toBe('yes');
});