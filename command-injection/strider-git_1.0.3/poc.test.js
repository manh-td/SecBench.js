test("Command Injection in strider-git", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  setTimeout(() => {
    const fs = require("fs");
    const path = "./strider-git";
    const file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlink(path, function (err) {
      if (err) {
        console.error("Error unlinking file:", err);
      } else {
        console.log("File unlinked successfully:", path);
      }
      done();
    });
  }, 1000); // Wait for the function to execute before checking
});