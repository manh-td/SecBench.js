test("Command Injection in ps", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  setTimeout(() => {
    done();
  }, 1000); // Wait for the asynchronous operation to complete
});

// Ensure the file is removed after the test
afterEach(() => {
  const fs = require("fs");
  const path = "./ps";
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
  }
});