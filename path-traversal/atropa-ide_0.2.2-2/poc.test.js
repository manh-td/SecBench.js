test("Path Traversal in atropa-ide", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const path = require("path");

  const payload = getPayload();
  let output = null;

  exploitFunction(payload).then(stdout => {
    output = stdout;
    expect(output).toBe(fs.readFileSync(payload.pathToFlag).toString());
    done();
  }).catch(err => {
    done(err);
  });
});