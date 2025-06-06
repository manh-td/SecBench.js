const path = require("path");

test("Path Traversal in serverfff", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const output = exploitFunction(...Object.values(payload));

  // Read the content of the flag file
  const fs = require("fs");
  const pathToFlag = path.resolve(__dirname, "../flag.html");
  const hostsFile = fs.readFileSync(pathToFlag).toString();

  // Verify the output
  expect(output).toBe(hostsFile);
});