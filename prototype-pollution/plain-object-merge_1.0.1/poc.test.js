test("Prototype pollution in plain-object-merge", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  
  const payload = getPayload();
  exploitFunction(payload);

  // Verify the output
  expect(Object.keys({}).polluted).toBe("yes");
});