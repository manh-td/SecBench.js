test("Prototype pollution in merge-deep", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const mergedObj = exploitFunction(payload);

  expect(mergedObj.polluted).toBe("yes");
});