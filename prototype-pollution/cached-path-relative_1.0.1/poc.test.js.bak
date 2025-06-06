test("Prototype pollution in cached-path-relative", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  expect(Object.prototype.polluted).toBe(true);
});