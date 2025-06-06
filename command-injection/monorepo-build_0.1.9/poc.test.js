test("Command Injection in monorepo-build", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();

  // Require necessary modules
  var fs = require("fs");
  var path = "./monorepo-build";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
      console.log("File removed:", path);
    }
  } catch (err) {
    console.error(err);
  }

  exploitFunction(payload);

  const file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  fs.unlink(path, function (err) {
    try {
      const cmd = `git config user.name "${user_name}"`;
      require("child_process").execSync(cmd).toString();
    } catch (error) {
      console.log(error);
    }
    try {
      const cmd = `git config user.email "${user_email}"`;
      require("child_process").execSync(cmd).toString();
    } catch (error) {
      console.log(error);
    }
    done();
  });
});