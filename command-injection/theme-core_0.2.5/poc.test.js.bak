test("Command Injection in theme-core", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./theme-core";

  const payload = getPayload();

  exploitFunction(payload);

  let file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  fs.unlink(path, function (err) {
    if (err) {
      console.error(err);
    }
    done();
  });
});

// Ensure that the file is removed after the test
afterEach(() => {
  const fs = require("fs");
  const path = "./theme-core";
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
  }
});