test("Command Injection in corenlp-js-prefab", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();

  exploitFunction(payload);

  const fs = require("fs");
  const path = "./corenlp-js-prefab";

  let file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  fs.unlink(path, function (err) {
    done();
  });
});