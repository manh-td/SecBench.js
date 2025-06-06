test("Path Traversal in servergmf", (done) => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    exploitFunction(payload)
        .then(output => {
            const path = require("path");
            const { sleep } = require("sleep");

            const pathToFlag = path.resolve(__dirname, "../flag.html");
            const hostsFile = require("fs").readFileSync(pathToFlag).toString();

            expect(output).toBe(hostsFile);
            done();
        })
        .catch(error => {
            console.error("Error:", error);
            done(new Error("Test failed"));
        });
});