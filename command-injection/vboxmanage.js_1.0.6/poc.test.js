test("Command Injection in vboxmanage.js", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./vboxmanag-js";

  const payload = getPayload();

  // Execute the payload
  exploitFunction(payload);

  // Verify the output
  let file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);
  fs.unlink(path, function (err) {});
});