const fs = require('fs');  // Import the fs module

function exploitFunction(userInput) {
  return new Promise((resolve, reject) => {
    find(userInput).then(() => {
      const path = "./local-devices";
      const fileExist = fs.existsSync(path);
      expect(fileExist).toBe(true);
      fs.unlink(path, function (err) {
        if (err) reject(err);
        resolve();
      });
    }).catch(reject);
  });
}

module.exports = { exploitFunction };