test("Command Injection in port-killer", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();
  exploitFunction(payload);

  const fileExist = fs.existsSync("./port-killer");
  expect(fileExist).toBe(true);
});