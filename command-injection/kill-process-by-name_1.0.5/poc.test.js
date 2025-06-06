test("Command Injection in kill-process-by-name", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./kill-process-by-name";

  const payload = getPayload();
  exploitFunction(payload);

  setTimeout(() => {
    const file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlink(path, () => {
      done();
    });
  }, 500);
});