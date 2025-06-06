test("Command Injection in wc-cmd", async (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./wc-cmd";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
      console.log("File removed:", path);
    }
  } catch (err) {
    console.error(err);
  }

  const payload = getPayload();
  const { stdout, stderr } = await exploitFunction(payload.command);

  let file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  fs.unlink(path, function (err) {
    if (err) {
      done(err);
    } else {
      done();
    }
  });
});