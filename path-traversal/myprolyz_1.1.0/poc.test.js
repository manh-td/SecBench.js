test("Path Traversal in myprolyz", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = require("path");

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output).toBe(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString());
  done();
});