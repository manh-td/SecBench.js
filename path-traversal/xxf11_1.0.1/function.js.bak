function exploitFunction(payload) {
  const { exec } = require("child_process");
  const { sleep } = require("sleep");

  let server = "node ./node_modules/xxf11/index.js";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  exec(payload.attack_string, (error, stdout) => {
    return stdout;
  });
}

module.exports = { exploitFunction };