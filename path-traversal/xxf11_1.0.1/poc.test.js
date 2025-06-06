test("Path Traversal in xxf11", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();

  exploitFunction(payload).then(output => {
    expect(output).toBe(hostsFile);  // Assuming 'hostsFile' is defined somewhere in the test environment
    done();
  }).catch(done.fail);
});