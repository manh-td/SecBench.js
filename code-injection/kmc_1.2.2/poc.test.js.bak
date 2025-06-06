test("Arbitrary code execution in kmc", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();
  exploitFunction(payload);

  const path = "./kmc";
  const fileExist = fs.existsSync(path);
  expect(fileExist).toBe(true);

  fs.unlink(path, (err) => {
    if (err) {
      throw err;
    }
  });
});