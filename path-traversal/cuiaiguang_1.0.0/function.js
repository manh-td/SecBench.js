function exploitFunction(payload) {
    const { exec } = require("child_process");
    const path = require("path");

    afterAll(() => {
        try {
            execSync("fuser -k 8888/tcp");
        } catch (e) {}
    });

    const pathToFlag = path.resolve(__dirname, "../flag.html");

    test("Path Traversal in cuiaiguang", (done) => {
        expect.assertions(1);

        let server = "node ./node_modules/cuiaiguang/index.js";
        let exe = exec(server, (error, stdout) => {
            expect(stdout).toBe(fs.readFileSync(pathToFlag).toString());
            done();
        });
    });

    // Execute the payload
    exec(payload.attack_string, (error, stdout) => {
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${error}`);
    });
}

module.exports = { exploitFunction };