test("Command Injection in kill-by-port", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./kill-by-port";

  const payload = getPayload();
  exploitFunction(payload);

  let file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);
  fs.unlink(path, () => {});
});

// Additional setup for fs module might be needed depending on the environment