test("Prototype pollution in @lyngs/merge", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const output = exploitFunction(payload);

  expect(output.polluted).toBe("yes");
  expect(Object.getPrototypeOf(output).polluted).toBe("yes");
});