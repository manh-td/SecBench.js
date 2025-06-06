test("Command Injection in samsung-remote", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();

  exploitFunction(payload, done); // Pass done to exploitFunction

  // No need to manually call done here
});