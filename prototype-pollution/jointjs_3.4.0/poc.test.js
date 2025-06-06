test("Prototype pollution in jointjs", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const jointjs = require("jointjs");
  exploitFunction(jointjs);

  expect({}.polluted).toBe("yes");
});