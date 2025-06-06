test("Prototype pollution in mergify", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const result = exploitFunction(payload);

  expect(result.polluted).toBe("yes");
});