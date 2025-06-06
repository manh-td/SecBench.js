test("Prototype pollution in js-data", () => {
  const { exploitFunction } = require("../function.js"); // Adjust the path as needed
  const { getPayload } = require("../payload.js"); // Adjust the path as needed

  const payload = getPayload();
  exploitFunction(payload);

  expect({}.polluted).toBe("yes");
});