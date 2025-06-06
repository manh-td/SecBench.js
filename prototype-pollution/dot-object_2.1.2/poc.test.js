test("Prototype pollution in dot-object", () => {
  const { exploitFunction } = require("./function");
  const { getPayload } = require('./payload');

  const payload = getPayload();
  let output = exploitFunction(payload.obj);

  expect(output.polluted).toBe("yes");
});