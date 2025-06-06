test("Path Traversal in serverliujiayi1", async () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();
  let output = await exploitFunction(payload);

  expect(output).toBe(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString());
});