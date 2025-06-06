const path = require("path");  // Import the path module
const fs = require("fs");

test("Path Traversal in ex-http-frame", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const expectedContent = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

  exploitFunction(payload).then((output) => {
    expect(output).toBe(expectedContent);
    done();
  }).catch((err) => {
    done(err);
  });
});