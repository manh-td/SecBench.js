test("Command Injection in lsof", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();
  exploitFunction(payload);

  const path = "./lsof";
  let file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  fs.unlink(path, function (err) {
    if (err) {
      console.error(err);
    }
    done();
  });
});