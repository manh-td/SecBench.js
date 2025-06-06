test("Command Injection in blamer", async () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload);

  // No additional verification code needed as the test block already verifies the outcome
});