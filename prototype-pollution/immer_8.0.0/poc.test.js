test("Prototype pollution in immer", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();

  exploitFunction(payload);

  // Initial check before modification
  expect(payload).not.toHaveProperty('__proto__.polluted');

  // After applying the patch
  expect(payload.polluted).toBe("yes");

  // Additional check to ensure global Object.prototype is not polluted
  expect(Object.prototype).not.toHaveProperty('polluted');
});