test("Path Traversal in nitro-server", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs"); // Require necessary modules

  const payload = getPayload();
  let output = exploitFunction(payload)
    .then(stdout => {
      expect(stdout).toBe(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString());
      done();
    })
    .catch(error => {
      done(error);
    });
});