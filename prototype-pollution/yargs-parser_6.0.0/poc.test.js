test("Prototype pollution in yargs-parser", () => {
  const { exploitFunction } = require("./function.js"); // Ensure the path is correct
  const { getPayload } = require('./payload.js'); // Ensure the path is correct

  const payload = getPayload();
  const parsedArgs = exploitFunction(payload);

  expect(parsedArgs.foo.__proto__.polluted).toBe("yes");
});