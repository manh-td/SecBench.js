const find = require("find-process");
const fs = require("fs");

function exploitFunction(command) {
  return new Promise((resolve, reject) => {
    find("pid", command)
      .then(list => {
        const path = "./find-process";
        const file_exist = fs.existsSync(path);
        resolve({ list, file_exist });
      })
      .catch(err => {
        reject(err);
      });
  });
}

module.exports = { exploitFunction };