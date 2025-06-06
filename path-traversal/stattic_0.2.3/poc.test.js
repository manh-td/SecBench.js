test("Path Traversal in static", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  let payload = getPayload();
  exploitFunction(payload)
    .then((stdout) => {
      expect(stdout).toBe(fs.readFileSync(payload.pathToFlag).toString());
      done();
    })
    .catch((error) => {
      done(error);
    });
});