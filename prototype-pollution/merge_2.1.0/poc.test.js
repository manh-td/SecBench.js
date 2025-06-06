test("Prototype pollution in merge", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const obj = exploitFunction(payload);

  expect(obj.x.polluted).toBe("yes");
});