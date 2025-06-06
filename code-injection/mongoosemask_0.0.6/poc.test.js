test("Arbitrary code execution in mongoosemask", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();
  let output = exploitFunction(payload);

  const path = "./mongoosemask";
  let file_exist = fs.existsSync(path);

  expect(file_exist).toBe(true);

  fs.unlink(path, function (err) {
    if (err) {
      console.error(err);
    }
  });
});