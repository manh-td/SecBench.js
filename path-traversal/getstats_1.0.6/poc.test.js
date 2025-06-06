test("Path Traversal in getstats", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require('fs');
  const path = require('path');

  const payload = getPayload();
  let output = null;

  // Execute the exploit function and wait for the promise to resolve
  exploitFunction(payload).then(stdout => {
    output = stdout;
  }).catch(error => {
    console.error(`Error executing ${attack_string}: ${error}`);
  });

  // Ensure the output matches the expected content
  expect(output).toBe(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString());
});