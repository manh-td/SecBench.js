test("Path Traversal in tinyserver2", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const pathToFlag = path.resolve(__dirname, "../flag.html");

  const payload = getPayload();
  let output = exploitFunction();

  // Read the content of the flag file
  const hostsFile = fs.readFileSync(pathToFlag).toString();

  // Verify the output
  expect(output).toBe(hostsFile);
});