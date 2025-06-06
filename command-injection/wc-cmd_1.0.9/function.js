function exploitFunction(command) {
  const a = require("wc-cmd");
  return new Promise((resolve, reject) => {
    a(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

module.exports = { exploitFunction };