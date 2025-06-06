const { exploitFunction } = require("./function.js");
const { getPayload } = require('./payload.js');

test("Command Injection in pdfinfojs", (done) => {
  const payload = getPayload();
  exploitFunction(payload);

  setTimeout(() => {
    const fs = require("fs");
    const path = "./pdfinfojs";
    const file_exist = fs.existsSync(path);
    expect(file_exist).toBe(false); // File should be deleted after the test
    done();
  }, 1000); // Wait for the async operations to complete
});