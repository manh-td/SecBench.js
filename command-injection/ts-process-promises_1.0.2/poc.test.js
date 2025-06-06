test("Command Injection in ts-process-promises", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./ts-process-promises";

  const payload = getPayload();
  exploitFunction(...Object.values(payload));

  let file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  fs.unlink(path, function (err) {});
});