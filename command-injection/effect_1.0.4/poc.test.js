test("Command Injection in effect", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./effect";

  const payload = getPayload();
  exploitFunction(payload);

  let file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  try {
    fs.unlinkSync(path);
  } catch (err) {}

  done();
});