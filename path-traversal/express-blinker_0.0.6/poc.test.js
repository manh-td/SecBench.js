test("Path Traversal in express-blinker", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();

  exploitFunction(payload)
    .then((stdout) => {
      expect(stdout).toBe(fs.readFileSync(payload()).toString());
      done();
    })
    .catch(done);
});