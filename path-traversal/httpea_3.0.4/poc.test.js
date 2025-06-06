test("Path Traversal in httpea", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload, (result) => {
    if (result) {
      done();
    } else {
      done(new Error("Exploit failed."));
    }
  });
});