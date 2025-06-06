test("Command Injection in git-add-remote", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./git-add-remote";

  // Cleanup existing file if it exists
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }

  const file_exist = !fs.existsSync(path);

  // Get the payload
  const payload = getPayload();

  // Exploit the function with the payload
  exploitFunction(payload);

  // Check if the file exists after the function call
  const file_exist_after = fs.existsSync(path);

  expect(file_exist).toBe(true);
  expect(file_exist_after).toBe(false);

  fs.unlink(path, function (err) {
    done();
  });
});