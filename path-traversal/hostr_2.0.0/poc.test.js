const path = require("path"); // Add this line

test("Path Traversal in hostr", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const { readFile } = require('fs'); // Ensure fs is imported

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Read the flag file
  readFile(path.resolve(__dirname, "../flag.html"), 'utf8', (err, data) => {
    if (err) throw err;

    const hostsFile = data.toString();

    // Verify the output
    expect(output).toBe(hostsFile);
  });
});