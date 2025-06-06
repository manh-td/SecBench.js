test("Prototype pollution in mpath", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const obj = payload.obj;

  exploitFunction(obj);

  expect(Object.getPrototypeOf(obj).polluted).toBe("yes");
});