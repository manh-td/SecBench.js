test("Arbitrary code execution in node-serialize", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  const path = "./node-serialize";
  const file_exist = fs.existsSync(path);

  expect(file_exist).toBe(true);
  fs.unlink(path, function (err) {});
});