test("Command Injection in pidusage", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  setTimeout(() => {
    const fs = require("fs");
    const path = "./pidusage";
    const file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlink(path, function (err) {
      done(err);
    });
  }, 1000); // Add a delay to ensure the file creation completes
});