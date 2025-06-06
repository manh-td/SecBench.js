const path = require("path");
const fs = require("fs");
const { exploitFunction } = require("./function.js");
const { getPayload } = require('./payload.js');

test("Path Traversal in wenluhong1", (done) => {
  const payload = getPayload();
  let output = exploitFunction(payload);

  fs.readFile(path.resolve(__dirname, "../flag.html"), (err, data) => {
    if (err) throw err;
    expect(output).toBe(data.toString());
    done();
  });
});