test("Arbitrary code execution in cd-messenger", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const path = "./cd-messenger";
  let file_exist = fs.existsSync(path);

  expect(file_exist).toBe(false);

  const payload = getPayload();
  exploitFunction(payload);

  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  const fileContent = fs.readFileSync(path, 'utf8');
  expect(fileContent).toBe('');

  fs.unlink(path, function (err) {});
});