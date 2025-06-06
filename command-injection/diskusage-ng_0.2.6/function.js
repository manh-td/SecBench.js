function exploitFunction(payload) {
  const root = require("diskusage-ng");
  const fs = require("fs");

  const path = "./diskusage-ng";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }

  const file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);

  root(payload, () => {
    const file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlinkSync(path);
    done(); // Ensure the done callback is called
  });
}

module.exports = { exploitFunction };