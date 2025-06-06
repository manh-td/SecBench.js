test("Path Traversal in der-server", (done) => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    const path = require("path");
    const pathToFlag = path.resolve(__dirname, "../flag.html");
    const fs = require("fs");

    const payload = getPayload();
    let output = exploitFunction(payload);

    fs.readFile(pathToFlag, 'utf8', (err, data) => {
        if (err) throw err;
        expect(output).toBe(data);
        done();
    });
});