test("Path Traversal in rjpserver", async (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let result = await exploitFunction(payload);

  expect(result).toBe(true);
  done();
});