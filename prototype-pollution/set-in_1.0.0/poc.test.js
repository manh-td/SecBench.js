test("Prototype pollution in set-in", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Verify the output
  expect({}.polluted).toBe(undefined); // Initial check
  expect(payload.obj.polluted).toBe("yes"); // Check if the payload worked
});