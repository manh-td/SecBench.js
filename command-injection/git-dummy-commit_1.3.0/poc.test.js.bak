test("Command Injection in git-dummy-commit", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./git-dummy-commit";

  // Initial check: File should not exist
  let file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);

  // Execute the payload
  const payload = getPayload();
  exploitFunction(payload);

  // Check if the file exists after executing the payload
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  // Clean up
  fs.unlink(path, function (err) {});
});