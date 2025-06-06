test("Path Traversal in rollup-plugin-server", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output).toBe(fs.readFileSync(payload).toString());
  done();
});