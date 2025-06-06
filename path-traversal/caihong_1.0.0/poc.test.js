test("Path Traversal in caihong", async (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const path = require('path'); // Ensure path is imported

  const payload = getPayload();
  let output;

  await new Promise((resolve) => {
    exploitFunction(payload, resolve);
  });

  expect(output).toBe(true);
  done();
});