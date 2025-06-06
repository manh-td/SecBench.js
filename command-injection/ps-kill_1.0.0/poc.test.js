test("Command Injection in ps-kill", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./ps-kill";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }

  const file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);

  const payload = getPayload();
  exploitFunction(payload);

  setTimeout(() => {
    const file_exist_after = fs.existsSync(path);
    expect(file_exist_after).toBe(true);
    fs.unlink(path, function (err) {
      done();
    });
  }, 1000); // Wait for the command to execute
});