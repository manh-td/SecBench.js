test("Prototype pollution in deep-override", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const output = exploitFunction(payload);

  expect(output.polluted).toBe("yes");
});