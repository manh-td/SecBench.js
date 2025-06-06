test("Arbitrary code execution in jsen", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();
  exploitFunction(payload.schema);

  const path = "./jsen";
  const file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  fs.unlink(path, function (err) {});
});