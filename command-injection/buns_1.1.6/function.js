function exploitFunction(payload) {
  var root = require("buns");
  const fs = require("fs");
  const path = "./buns";

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
    root.install(payload);
  } catch (error) {
  } finally {
    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlink(path, function (err) {});
  }
}

module.exports = { exploitFunction };