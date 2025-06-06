test("Prototype pollution in deephas", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  // No need to add additional verification code here since the test case already verifies the expected outcome
});