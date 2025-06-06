test("Command Injection in gm", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  // The done callback is implicitly called when fs.unlink completes
  // or an error occurs.
  done();
});

// Ensure necessary modules are required at the top level for the test to work
require("assert");
require("fs");