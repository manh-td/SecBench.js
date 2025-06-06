test("Path Traversal in srverqq", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();
  const hostsFile = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

  const result = exploitFunction();

  expect(result).toBe(hostsFile);
  done();
});