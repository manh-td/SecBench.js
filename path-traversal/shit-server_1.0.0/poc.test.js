test("Path Traversal in shit-server", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const path = require("path"); // Import the path module

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Read the actual flag file content
  const hostsFile = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

  // Verify the output
  expect(output).toBe(hostsFile);
  done();
});