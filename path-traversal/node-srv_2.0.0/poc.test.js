test("Path Traversal in node-srv", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(...Object.values(payload));

  expect(output).toBe(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString());
  done();
});