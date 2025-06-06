test("Prototype pollution in object-path", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const obj = {};
  const payload = getPayload();
  exploitFunction(obj);

  expect(obj.polluted).toBe("yes");
});