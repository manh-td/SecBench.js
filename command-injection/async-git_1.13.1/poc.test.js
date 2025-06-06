test("Command Injection in async-git", async () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./async-git";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
      console.log("File removed:", path);
    }
  } catch (err) {
    console.error(err);
  }

  const file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);

  const payload = getPayload();
  await exploitFunction(payload);

  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  fs.unlink(path, function (err) {});
});