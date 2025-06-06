test("Prototype pollution in @firebase/util", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const utils = require("@firebase/util");

  const payload = getPayload();
  exploitFunction(payload);

  expect({}.polluted).toBe("yes");
});