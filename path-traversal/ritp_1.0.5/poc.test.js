test("Path Traversal in ritp", (done) => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    const path = require("path"); // Ensure path module is imported
    const fs = require("fs");
    const pathToFlag = path.resolve(__dirname, "../flag.html");
    const hostsFile = fs.readFileSync(pathToFlag).toString();

    // Run the exploit function
    exploitFunction().then(output => {
        expect(output).toBe(hostsFile);
        done();
    }).catch(error => {
        done(error);
    });
});