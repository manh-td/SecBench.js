function exploitFunction(commands) {
  return new Promise((resolve, reject) => {
    try {
      const childProcess = require('child_process');
      const commandString = commands.join(" ");
      const result = childProcess.exec(commandString, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          resolve(stdout);
        }
      });
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = { exploitFunction };