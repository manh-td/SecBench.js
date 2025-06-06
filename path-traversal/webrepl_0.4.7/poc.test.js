test("Path Traversal in webrepl", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const path = require("path");
  const pathToFlag = path.resolve(__dirname, "../flag.html");

  const payload = getPayload();
  exploitFunction(payload)
    .then(stdout => {
      expect(stdout).toBe(fs.readFileSync(pathToFlag).toString());
      done();
    })
    .catch(error => {
      done(error);
    });
});