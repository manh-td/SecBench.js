test("Path Traversal in welcomyzt", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const path = require("path"); // Import the path module
  const { fs } = require("fs"); // Import the fs module

  const payload = getPayload;
  let output = exploitFunction(payload);

  expect(output).toBe(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString());
  done();
});