test("Prototype pollution in merge-change", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let obj = payload.obj;
  exploitFunction(obj);

  expect({}.polluted).toBe("yes");
});