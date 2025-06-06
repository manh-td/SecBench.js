test("Prototype pollution in ini", () => {
  const { exploitFunction } = require("../utils/function.js");
  const { getPayload } = require('../utils/payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  expect({}.polluted).toBe("yes");
});