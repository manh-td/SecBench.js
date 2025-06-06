test("Path Traversal in serverlyr", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  // Get the payload
  const payload = getPayload();

  // Exploit the function
  exploitFunction(payload).then(output => {
    // Read the flag file content
    const fs = require("fs");
    const hostsFile = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

    // Verify the output
    expect(output).toBe(hostsFile);

    done();
  }).catch(error => {
    done.fail(error);
  });
});