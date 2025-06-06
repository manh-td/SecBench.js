test("Arbitrary code execution in hot-formula-parser", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();
  exploitFunction(payload);

  const path = "./hot-formula-parser";
  let file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  fs.unlink(path, function (err) {
    if (err) {
      console.error("Failed to delete file:", err);
    }
  });
});