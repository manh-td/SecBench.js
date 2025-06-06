test("Command Injection in macfromip", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./macfromip";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
      console.log("File removed:", path);
    }
  } catch (err) {
    console.error(err);
  }

  let file_exist = fs.existsSync(path);  // Change 'const' to 'let'
  expect(file_exist).toBe(false);

  const payload = getPayload();
  exploitFunction(payload);

  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  fs.unlink(path, function (err) {
    done();
  });
});