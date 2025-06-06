test("Command Injection in macaddress", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  setTimeout(() => {
    const fs = require("fs");
    const path = "./macaddress";

    const file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    done();
  }, 1000); // Wait for the async operation to complete
});