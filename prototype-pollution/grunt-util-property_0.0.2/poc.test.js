test("Prototype pollution in grunt-util-property", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const grunt = require("grunt"); // Ensure grunt is required here
  exploitFunction(grunt); // Pass the grunt object to exploitFunction

  expect(Object.prototype.polluted).toBeUndefined(); // Assuming we want to check the prototype
  expect(payload.polluted).toBe("yes");
});