test("Command Injection in connection-tester", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const command = payload.command;
  exploitFunction(command);

  // Verify the output
  const fs = require("fs");
  const path = "./connection-tester";
  expect(fs.existsSync(path)).toBe(true);
});