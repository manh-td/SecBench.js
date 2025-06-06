function exploitFunction(payload) {
    const { exec } = require("child_process");
    const { sleep } = require("sleep");

    afterAll(() => {
        try {
            execSync("fuser -k 8888/tcp");
        } catch (e) {}
    });

    const path = require("path");
    const pathToFlag = path.resolve(__dirname, "../flag.html");

    test("Path Traversal in lihuini", (done) => {
        expect.assertions(1);

        let server = "node ./node_modules/lihuini/index.js";
        let exe = exec(server, (error, stdout) => {
            sleep.sleep(2);
            expect(stdout).toBe(require("fs").readFileSync(pathToFlag).toString());
            done();
        });
    });
}

module.exports = { exploitFunction };