test("Command Injection in node-ps", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const path = "./node-ps";

  const payload = getPayload();
  exploitFunction(...Object.values(payload), done);

  // Wait for the asynchronous operations to complete before checking
  setTimeout(() => {
    const fs = require("fs");
    const file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlink(path, function (err) {
      done();
    });
  }, 1000); // Adjust timeout as needed
});