test("Path Traversal in zs123", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  // Require necessary modules
  const path = require("path"); // Import the path module
  const { sleep } = require("sleep");

  // Get the payload
  const payload = getPayload();

  // Exploit the function
  const output = exploitFunction(payload);

  // Verify the output
  expect(output).toBe(require("fs").readFileSync(path.resolve(__dirname, "../flag.html")).toString());

  done();
});

// Cleanup after all tests
afterAll(() => {
  try {
    execSync("fuser -k 8888/tcp");
  } catch (e) {}
});