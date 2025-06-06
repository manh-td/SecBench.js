test("Prototype pollution in mixin-deep", () => {
  const { exploitFunction } = require("./function.js"); // Ensure the path is correct
  const { getPayload } = require('./payload.js'); // Ensure the path is correct

  const payload = getPayload();
  let obj = exploitFunction(payload);

  expect(Object.getPrototypeOf(obj).polluted).toBe("yes");
});