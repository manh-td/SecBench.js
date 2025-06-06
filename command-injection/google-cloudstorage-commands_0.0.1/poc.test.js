test("Command Injection in google-cloudstorage-commands", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./google-cloudstorage-commands";

  // Ensure the file does not exist initially
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
      console.log("File removed:", path);
    }
  } catch (err) {
    console.error(err);
  }

  const payload = getPayload();

  // Execute the vulnerable function with the payload
  exploitFunction(payload).finally(() => {
    const file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);

    // Clean up after the test
    fs.unlink(path, function (err) {});
  });
});