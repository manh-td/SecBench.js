test("Prototype pollution in json-pointer", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let obj = exploitFunction(payload);

  expect(obj.polluted).toBe("yes");
});