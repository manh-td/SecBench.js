test("Prototype pollution in promisehelpers", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const obj = exploitFunction(getPayload());
  expect(obj.polluted).toBe("yes");
});