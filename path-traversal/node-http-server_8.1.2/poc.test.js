test("Path Traversal in node-http-server", (done) => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const pkg = require("node-http-server");
    const fs = require("fs");
    const { exec } = require("child_process");

    let hostsFile = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

    const payload = getPayload();
    const result = exploitFunction(payload);

    exec(result.attack_string, (error, stdout) => {
        expect(stdout).toBe(hostsFile);
        done();
    });
});