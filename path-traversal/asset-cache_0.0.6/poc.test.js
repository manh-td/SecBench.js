test("Path Traversal in asset-cache", (done) => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const path = require("path");  // Import the path module

    const payload = getPayload();
    let output;

    exploitFunction(payload, (result) => {
        output = result;
        done();
    });

    setTimeout(() => {
        expect(output).toBe(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString());
    }, 1000); // Adjust the timeout as needed
});

test("Check if flag.html content was retrieved", (done) => {
    const fs = require("fs");
    const path = require("path");  // Import the path module

    const pathToFlag = path.resolve(__dirname, "../flag.html");
    const expectedContent = fs.readFileSync(pathToFlag).toString();

    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    let output;

    exploitFunction(payload, (result) => {
        output = result;
        done();
    });

    setTimeout(() => {
        expect(output).toBe(expectedContent);
    }, 1000); // Adjust the timeout as needed
});