const { exec } = require('child_process');

function exploitFunction(payload) {
  exec(payload, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

module.exports = { exploitFunction };