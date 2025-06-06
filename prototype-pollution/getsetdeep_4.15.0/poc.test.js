test("Prototype pollution in getsetdeep", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const pkg = require("getsetdeep");

  const payload = getPayload();
  const obj = payload.obj;

  expect({}.polluted).toBe(undefined);
  exploitFunction(obj);

  expect(obj.polluted).toBe("yes");
});