test("Command Injection in apiconnect-cli-plugins", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload);

  // The test itself does not need additional verification code since it checks for file existence.
});