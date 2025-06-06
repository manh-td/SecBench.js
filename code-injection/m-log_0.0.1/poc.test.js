test("Arbitrary code execution in m-log", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./m-log";

  const payload = getPayload();
  exploitFunction(payload);

  const file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  fs.unlink(path, (err) => {
    if (err) {
      throw err;
    }
    console.log("File successfully unlinked.");
  });

  expect(file_exist).toBe(false);
});