test("Prototype pollution in objnest", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const objnest = require("objnest");  // Ensure objnest is required here as well

  const payload = getPayload();
  exploitFunction(payload);

  expect({}.polluted).toBe("yes");  // Verify the prototype pollution
});