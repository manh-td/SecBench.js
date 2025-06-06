test("Path Traversal in rollup-plugin-dev-server", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload);

  output.then((stdout) => {
    const expectedContent = fs.readFileSync(payload()).toString();
    expect(stdout).toBe(expectedContent);
    done();
  }).catch(done);
});