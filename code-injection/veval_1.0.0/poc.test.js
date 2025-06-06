test("Arbitrary code execution in veval", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload.code);

  expect({}.polluted).toBe("yes");
});