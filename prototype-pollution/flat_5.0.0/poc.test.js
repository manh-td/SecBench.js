test("Prototype pollution in flat", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  expect({}.polluted).toBe("yes"); // Check if the object was polluted
  expect(Object.prototype.polluted).toBeUndefined(); // Check if the prototype was not polluted
});