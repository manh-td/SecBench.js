test("Prototype pollution in @uifabric/utilities", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const result = exploitFunction(payload);

  expect(result.k3.polluted).toBe("yes");
});