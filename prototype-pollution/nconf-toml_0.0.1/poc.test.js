test("Prototype pollution in nconf-toml", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  expect({}.polluted).toBe("yes");
});