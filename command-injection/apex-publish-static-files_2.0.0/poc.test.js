test("Command Injection in apex-publish-static-files", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./apex-publish-static-files";

  const payload = getPayload();

  try {
    exploitFunction(payload);
  } catch (err) {
    // Handle error if needed
  }

  let file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  fs.unlink(path, function (err) {
    if (err) {
      console.error(err);
    }
    console.log("File removed:", path);
  });
});