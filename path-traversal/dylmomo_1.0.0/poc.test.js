test("Path Traversal in dylmomo", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require('fs'); // Require necessary modules
  const path = require('path');

  const payload = getPayload();
  let output = exploitFunction(...Object.values(payload));

  // Verify the output
  expect(output).toBe(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString());
});