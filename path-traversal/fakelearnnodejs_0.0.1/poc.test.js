test("Path Traversal in fakelearnnodejs", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload)
    .then((stdout) => {
      expect(stdout).toBe(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString());
      done();
    })
    .catch((error) => {
      done(error);
    });
});

// Ensure necessary modules are required
const fs = require("fs");
const path = require("path");
const { sleep } = require("sleep");