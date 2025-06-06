test("Arbitrary code execution in @zhaoyao91/eval-in-vm", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload.code);

  expect({}.polluted).toBe("yes");
});