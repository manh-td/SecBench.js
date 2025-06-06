test("Command Injection in command-exists", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  const fs = require("fs");
  const path = "./command-exists";
  const file_exist = fs.existsSync(path);

  expect(file_exist).toBe(true);
  fs.unlink(path, function (err) {
    if (err) {
      console.error("Failed to delete file:", err);
    }
  });
});