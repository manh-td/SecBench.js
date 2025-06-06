test("Prototype pollution in dot-notes", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const obj = getPayload();
  exploitFunction(obj);

  expect(obj.polluted).toBe("yes");
});