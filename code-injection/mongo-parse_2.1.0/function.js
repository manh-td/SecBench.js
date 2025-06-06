const fs = require("fs");
const parser = require("mongo-parse");

function exploitFunction(payload) {
  try {
    if (fs.existsSync(payload.path)) fs.unlinkSync(payload.path);
    console.log("File removed:", payload.path);
  } catch (err) {
    console.error(err);
  }

  const file_exist = fs.existsSync(payload.path);
  expect(file_exist).toBe(false);

  try {
    let query = parser.parse(payload.input);
  } catch (error) {
    console.log(error);
  }

  setTimeout(() => {
    const file_exist = fs.existsSync(payload.path);
    expect(file_exist).toBe(true);
    fs.unlink(payload.path, () => {});
  }, 500);
}

module.exports = { exploitFunction };