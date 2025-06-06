test("Remote code execution in git", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  setTimeout(() => {
    done();
  }, 1000); // Wait for the asynchronous operations to complete
});

// Ensure that the file is deleted after the test
afterAll(() => {
  const fs = require("fs");
  const path = "./git";
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
  }
});