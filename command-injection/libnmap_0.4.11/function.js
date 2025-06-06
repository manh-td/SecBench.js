function exploitFunction(payload, done) {
  const nmap = require("libnmap");
  const fs = require("fs");
  const path = "./libnmap";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }

  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);

  const opts = payload;

  nmap.scan(opts, function (err, report) {
    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlink(path, function (err) {
      if (err) {
        throw err;
      }
      done();
    });
  });
}

module.exports = { exploitFunction };