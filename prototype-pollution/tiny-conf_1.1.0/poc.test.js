test("Prototype pollution in tinyConf", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction();

  expect(Object.getPrototypeOf({}).polluted).toBe("yes");
});