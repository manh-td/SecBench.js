test("Command Injection in scp", (done) => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    exploitFunction(payload);

    setTimeout(() => {
        const fileExist = fs.existsSync(payload.path);
        expect(fileExist).toBe(true);
        done();
    }, 1000); // Wait for the async operation to complete
});

// Note: This is a mock test function and might need adjustments based on the actual environment.