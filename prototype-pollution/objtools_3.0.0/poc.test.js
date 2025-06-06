test("Prototype pollution in objtools", () => {
  const { exploitFunction } = require("./utils/function.js");
  const { getPayload } = require('./utils/payload.js');

  const payload = getPayload();
  const output = exploitFunction(payload);

  expect(output.polluted).toBe("yes");
});