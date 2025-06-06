function exploitFunction(payload) {
  const fs = require("fs");
  const path = require("path");

  try {
    const filePath = path.resolve(payload);
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        console.error(`Error accessing file: ${err}`);
        return;
      }
      fs.readFile(filePath, (err, data) => {
        if (err) {
          console.error(`Error reading file: ${err}`);
          return;
        }
        console.log(data.toString());
      });
    });
  } catch (e) {
    console.error(`Caught exception: ${e}`);
  }
}

module.exports = { exploitFunction };