test("Path Traversal in serverxxx", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();

  exploitFunction(getPayload).then((stdout) => {
    expect(stdout).toBe(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString());
    done();
  }).catch((error) => {
    console.error(error);
    done.fail(error);
  });
});