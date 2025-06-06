test("Command Injection in react-dev-utils", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();
  exploitFunction(payload);

  const path = "./react-dev-utils";
  const file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);
  fs.unlink(path, function (err) {});
});