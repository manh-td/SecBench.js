test("Path Traversal in serverwzl", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const path = require("path");
  const fs = require("fs");

  const payload = getPayload();
  let output = exploitFunction(payload);

  const flagContent = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();
  expect(output).toBe(flagContent);
});