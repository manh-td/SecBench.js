test("Path Traversal in 11xiaoli", (done) => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    const { attack_string } = exploitFunction(payload);

    expect.assertions(1);

    const path = require("path");
    const hostsFile = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

    const { exec } = require("child_process");
    exec(attack_string, (error, stdout) => {
        let out = false;
        if (stdout.includes(hostsFile)) {
            out = true;
        }
        expect(out).toBe(true);
        done();
    });
}, 30000);