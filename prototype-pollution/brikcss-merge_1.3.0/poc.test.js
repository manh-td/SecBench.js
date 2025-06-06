test("Prototype pollution in @brikcss/merge", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output.polluted).toBe("yes");
});