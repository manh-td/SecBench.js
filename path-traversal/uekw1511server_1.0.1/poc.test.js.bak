test("Path Traversal in uekw1511server", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const path = require("path");
  const fs = require("fs");

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Verify the output
  expect(output).toBe(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString());
});