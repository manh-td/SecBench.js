function exploitFunction(payload) {
    const { exec } = require("child_process");
    const path = require("path");

    afterAll(() => {
        try {
            execSync("fuser -k 8888/tcp");
        } catch (e) {}
    });

    const { sleep } = require("sleep");
    const pathToFlag = path.resolve(__dirname, "../flag.html");

    test("Path Traversal in xingbaohai", (done) => {
        expect.assertions(1);

        let server = "node ./node_modules/xingbaohai/index.js";
        let exe = exec(server, (error, stdout) => {
            sleep.sleep(2);
            exec(payload.attack_string, (error, stdout) => {
                expect(stdout).toBe(fs.readFileSync(pathToFlag).toString());
                done();
            });
        });
    });
}

module.exports = { exploitFunction };