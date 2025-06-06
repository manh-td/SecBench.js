const { jest } = require('@jest/globals');

test("Command Injection in diskstats", (done) => {
  const { exploitFunction } = require("./function");
  const { getPayload } = require('./payload');

  const payload = getPayload();
  exploitFunction(payload);

  setTimeout(() => {
    const fs = require("fs");
    const path = "./diskstats";
    const file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlinkSync(path);
    done();
  }, 1000); // Wait for the asynchronous operation to complete
});

// Ensure Jest is imported for test execution