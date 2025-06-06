function exploitFunction(payload) {
  const a = require("theme-core");
  const exec = require('child_process').exec;

  exec(payload, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

module.exports = { exploitFunction };