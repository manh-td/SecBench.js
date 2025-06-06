test("Path Traversal in looppake", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  // Require necessary modules
  const { execSync } = require("child_process");
  const path = require("path");

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Verify the output
  expect(output).toBe(execSync(`cat ${path.resolve(__dirname, "../flag.html")}`, { stdio: 'pipe' }));
});

// Ensure the cleanup command is run after the test
afterAll(() => {
  execSync("fuser -k 8888/tcp", { stdio: 'inherit' });
});