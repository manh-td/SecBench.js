test("Path Traversal in mfrs", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output).toBe(getPayload());

  done();
}, 30000);