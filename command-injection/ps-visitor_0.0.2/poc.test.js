test("Command Injection in ps-visitor", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./ps-visitor";

  const payload = getPayload();
  let file_exist = fs.existsSync(path);

  // Before running the exploit, check if the file exists
  expect(file_exist).toBe(false);

  // Run the exploit function
  exploitFunction(payload).then(() => {
    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlink(path, () => {});
  }).catch(err => {
    console.error(err);
  });
});