test("Command Injection in killing", (done) => {
  const { exploitFunction } = require("../utils/function.js");
  const { getPayload } = require('../utils/payload.js');
  const fs = require("fs");
  const path = "./killing";

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