test("Path Traversal in basic-static", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const { hostsFile } = exploitFunction(payload);

  // Read the flag file directly for comparison
  const expectedHostsFile = fs.readFileSync(payload.pathToFlag).toString();

  expect(hostsFile).toBe(expectedHostsFile);
  done();
});