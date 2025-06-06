function exploitFunction(payload) {
  const { execSync } = require("child_process");

  try {
    execSync("fuser -k 8888/tcp");
  } catch (e) {}

  const path = require("path");
  const pathToFlag = path.resolve(__dirname, "../flag.html");

  let server = "node ./node_modules/severzlt/index.js";
  let exe = require("child_process").exec(server, (error, stdout) => {});

  // Wait for 2 seconds
  const sleep = require("sleep");
  sleep.sleep(2);

  exec(payload.attack_string, (error, stdout) => {
    if (error) {
      console.error(`Error executing payload: ${error}`);
      return;
    }
    return stdout;
  });
}

module.exports = { exploitFunction };