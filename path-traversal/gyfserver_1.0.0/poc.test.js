test("Path Traversal in gyfserver", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const path = require("path");
  const fs = require("fs");
  const sleep = require("sleep");

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output).toBe(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString());
  done();
});