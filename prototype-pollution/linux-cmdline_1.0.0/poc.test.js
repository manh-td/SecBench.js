test("Prototype pollution in linux-cmdline", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  expect({}.polluted).toBe(undefined);

  const payload = getPayload();
  exploitFunction(payload);

  expect({}.polluted).toBe("yes");
});