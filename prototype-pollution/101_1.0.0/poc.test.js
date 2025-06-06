test("prototype pollution in 101/set", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  expect({}.polluted).toBe(undefined);

  const obj = getPayload();
  exploitFunction(obj, "__proto__.polluted", "yes");

  expect(obj.polluted).toBe("yes");
});