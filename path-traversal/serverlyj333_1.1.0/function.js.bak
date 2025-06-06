function exploitFunction(payload) {
  const path = require("path");
  const { sleep } = require("sleep");
  const pathToFlag = path.resolve(__dirname, "../flag.html");

  const execSync = require("child_process").execSync;

  afterAll(() => {
    try {
      execSync("fuser -k 8888/tcp");
    } catch (e) {}
  });

  let server = "node ./node_modules/serverlyj333/index.js";
  let exe = require("child_process").exec(server, (error, stdout) => {});

  sleep.sleep(2);

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;

  exec(attack_string, (error, stdout) => {
    let out = false;
    if (stdout.includes(require("fs").readFileSync(pathToFlag).toString())) {
      out = true;
    }
    return out; // Return the result for verification
  });
}

module.exports = { exploitFunction };