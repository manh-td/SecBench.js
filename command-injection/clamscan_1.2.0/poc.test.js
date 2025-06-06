test("Command Injection in clamscan", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload);

  // The test expects the file to exist after the execution
  expect(fs.existsSync(payload)).toBe(true);
});

// Ensure to require the necessary modules
const fs = require("fs");