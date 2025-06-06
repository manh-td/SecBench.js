test("Path Traversal in node-staticserver", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const assert = require("assert");

  const payload = getPayload();
  exploitFunction(payload)
    .then(stdout => {
      assert.strictEqual(stdout, fs.readFileSync(payload).toString());
      done();
    })
    .catch(error => {
      throw error;
    });
});