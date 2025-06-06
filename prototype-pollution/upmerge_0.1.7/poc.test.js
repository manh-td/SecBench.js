test("prototype pollution in upmerge", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let obj = exploitFunction(payload);

  expect(obj.polluted).toBe("yes");
});