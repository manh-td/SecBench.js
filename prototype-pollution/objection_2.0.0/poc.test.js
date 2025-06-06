test("Prototype pollution in objection", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const output = exploitFunction(payload);

  expect(output).toBe("yes");
});