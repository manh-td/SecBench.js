test("Path Traversal in crud-file-server", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload).then((result) => {
    expect(result).toBe(payload);
    done();
  }).catch((error) => {
    done(error);
  });
});