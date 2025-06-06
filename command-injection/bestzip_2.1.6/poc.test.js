test("Command Injection in bestzip", (done) => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    const { expect } = require('chai'); // Ensure chai is required here

    const payload = getPayload();
    exploitFunction(payload).then(() => {
        done();
    }).catch(err => {
        done(err);
    });
});