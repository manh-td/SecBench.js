test("Path Traversal in easy-node-server", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const path = require("path");

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output).toBe(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString());
  done();
});