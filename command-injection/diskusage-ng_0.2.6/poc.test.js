test("Command Injection in diskusage-ng", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();

  exploitFunction(...Object.values(payload), done); // Pass the done callback

  // No need for additional verification code here as the test itself verifies the existence of the file
});