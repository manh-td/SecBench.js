test("Command Injection in npm-help", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();
  exploitFunction(payload);

  const path = "./npm-help";
  let file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  fs.unlinkSync(path);
});