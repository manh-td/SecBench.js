test("Path Traversal in shenliru3", async () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    const stdout = await new Promise((resolve, reject) => {
        exploitFunction(payload, (error, stdout) => {
            if (error) reject(error);
            resolve(stdout);
        });
    });

    const pathToFlag = path.resolve(__dirname, "../flag.html");
    const expectedContent = fs.readFileSync(pathToFlag).toString();
    expect(stdout).toBe(expectedContent);
});

// Ensure you have the necessary modules imported at the top of your test file
const fs = require("fs");
const path = require("path");
const { sleep } = require("sleep");