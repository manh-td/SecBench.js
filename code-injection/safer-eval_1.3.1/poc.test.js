test("Arbitrary code execution in safer-eval", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();

  exploitFunction(payload);

  expect(Object.prototype.polluted).toBe("yes");
});