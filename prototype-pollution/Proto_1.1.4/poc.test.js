test("Prototype pollution in Proto", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  expect({}.polluted).toBe(undefined);

  const payload = getPayload();
  const output = exploitFunction(payload);

  expect(output.polluted).toBe("yes");
});