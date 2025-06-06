const path = require("path");
const { exec } = require("child_process");

function exploitFunction(payload) {
    const pkg = require("willvdb_test_server");
    const fs = require("fs");

    try {
        execSync("fuser -k 8973/tcp", () => {});
    } catch (e) {}

    pkg.run(8973, __dirname);

    const attack_string = `curl -v --path-as-is "http://127.0.0.1:8973${payload}"`;
    return new Promise((resolve, reject) => {
        exec(attack_string, (error, stdout) => {
            if (error) {
                reject(error);
            } else {
                resolve(stdout);
            }
        });
    });
}

module.exports = { exploitFunction };