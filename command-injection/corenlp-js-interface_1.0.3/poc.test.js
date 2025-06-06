test("Command Injection in corenlp-js-interface", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./corenlp-js-interface";

  const payload = getPayload();
  exploitFunction(payload);

  let file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  fs.unlink(path, function (err) {});
});