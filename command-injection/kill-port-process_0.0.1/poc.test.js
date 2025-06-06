test("Command Injection in kill-port-process", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction({ PORT: payload });

  // Verify the output
  expect(fs.existsSync("./kill-port-process")).toBe(false); // File should be removed initially
  expect(output).resolves.toHaveProperty("file_exist", true); // File should exist after execution
});