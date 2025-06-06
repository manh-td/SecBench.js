function exploitFunction(payload) {
    const { exec } = require("child_process");

    afterAll(() => {
        try {
            execSync("fuser -k 7000/tcp");
        } catch (e) {}
    });

    const path = require("path");

    test("Path Traversal in m-server", (done) => {
        expect.assertions(1);
        const fs = require("fs");
        let hostsFile = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

        let server = "node ./node_modules/m-server/index.js";
        let exe = exec(server, (error, stdout) => {
            exec(payload.attack_string, (error, stdout) => {
                expect(stdout).toBe(hostsFile);
                done();
            });
        });
    });
}

module.exports = { exploitFunction };