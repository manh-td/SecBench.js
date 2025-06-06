test("Command Injection in get-npm-package-version", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./get-npm-package-version";

  const payload = getPayload();
  exploitFunction(payload);

  let file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  fs.unlink(path, function (err) {});
});