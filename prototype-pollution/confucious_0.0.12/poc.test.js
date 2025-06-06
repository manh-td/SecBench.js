test("Prototype pollution in confucious", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  try {
    exploitFunction(payload);
  } catch (error) {
    console.error(error.message); // Log the error message for debugging
    throw new Error('Exploit function threw an error');
  }

  expect({}.polluted).toBe("yes");
});