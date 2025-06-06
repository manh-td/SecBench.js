test("Path Traversal in statichttpserver", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();

  // Call the exploit function
  exploitFunction(payload);

  // Wait for the server to stop and verify the output
  setTimeout(() => {
    const path = require("path");
    const flagContent = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();
    expect(stdout).toBe(flagContent);
    done();
  }, 3000); // Adjust timeout as needed
});

// Ensure you have the necessary modules imported at the top of your test file
const fs = require("fs");
const sleep = require("sleep");