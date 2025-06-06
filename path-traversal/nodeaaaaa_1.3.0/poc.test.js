test("Path Traversal in nodeaaaaa", async () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const path = require("path"); // Import the path module

  const payload = getPayload();
  const stdout = await new Promise((resolve, reject) => {
    exploitFunction(payload, (error, stdout) => {
      if (error) reject(error);
      resolve(stdout);
    });
  });

  // Read the flag file content
  const flagFilePath = path.resolve(__dirname, "../flag.html");
  const hostsFile = fs.readFileSync(flagFilePath).toString();

  // Verify the output
  expect(stdout).toBe(hostsFile);
});