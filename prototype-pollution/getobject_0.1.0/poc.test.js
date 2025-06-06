test("Prototype pollution in getobject", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const obj = payload.obj;

  exploitFunction(obj);

  expect(obj.polluted).toBe("yes");
});