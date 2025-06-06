test("Path Traversal in gfm-srv", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Read the flag file content
  const fs = require("fs");
  const flagContent = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

  // Verify the output
  expect(output).toBe(flagContent);
});