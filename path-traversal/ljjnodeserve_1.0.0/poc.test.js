test("Path Traversal in ljjnodeserve", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const path = require("path"); // Import the path module
  const { sleep } = require("sleep");
  const fs = require("fs");
  const pathToFlag = path.resolve(__dirname, "../flag.html");
  const hostsFile = fs.readFileSync(pathToFlag).toString();

  // Get the payload
  const payload = getPayload();

  // Exploit the function with the payload
  const output = exploitFunction(payload);

  // Verify the output
  expect(output).toBe(true);
});