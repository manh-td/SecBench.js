test("Command Injection in growl", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();

  exploitFunction(payload);

  // Wait for the function to complete and check the file existence
  setTimeout(() => {
    const fs = require("fs");
    const path = "./growl";
    const fileExist = fs.existsSync(path);
    expect(fileExist).toBe(true);
    done();
  }, 1000); // Add a delay to ensure the command has time to execute
});