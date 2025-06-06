test("Arbitrary code execution in mixin-pro", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const file_exist = exploitFunction(payload);

  expect(file_exist).toBe(true);
  fs.unlink(path, function (err) {});
});

// Note: The `path` variable should be defined before calling `fs.unlink`.