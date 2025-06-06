test("Command Injection in npm-git-publish", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();

  let output = exploitFunction(payload);

  // Verify the output
  expect(output).rejects.toThrow(); // Assuming the function should reject due to command injection
});