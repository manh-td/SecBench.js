test("Prototype pollution in smart-extend", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  expect(Object.prototype.polluted).toBe("yes");
});