test("Path Traversal in ptest", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = require("path");

  // Get the flag content
  const hostsFile = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

  // Call the exploit function and handle the promise
  exploitFunction().then((output) => {
    // Verify the output
    expect(output.stdout).toBe(hostsFile);
    done();
  }).catch(done.fail);
});

// The afterAll cleanup is already part of the test framework setup
afterAll(() => {
  try {
    execSync("fuser -k 8080/tcp");
  } catch (e) {}
});