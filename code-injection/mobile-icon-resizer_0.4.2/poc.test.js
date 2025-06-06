test("Arbitrary code execution in mobile-icon-resizer", (done) => {
    const { exploitFunction } = require("../function");
    const { getPayload } = require('../payload');
    const expect = require('expect');

    const payload = getPayload();
    exploitFunction(payload);

    setTimeout(() => {
        done();
    }, 500);
});

// Note: The original code had an error in the way it was calling `done`. 
// The `done` callback should be called after the timeout if the test is asynchronous.