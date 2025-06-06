test("Command Injection in lycwed-spritesheetjs", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();

  exploitFunction(payload);

  setTimeout(() => {
    const fs = require("fs");
    const path = "./lycwed-spritesheetjs";

    const file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);

    fs.unlink(path, function (err) {
      if (err) {
        console.error(err);
      }
      done();
    });
  }, 1000); // Wait for the async operation to complete
});