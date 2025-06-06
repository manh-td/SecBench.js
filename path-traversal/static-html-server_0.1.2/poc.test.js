test("Path Traversal in static-html-server", (done) => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    exploitFunction(payload); // Pass the payload to exploitFunction

    // The test suite will handle the verification internally through the callback functions.
    done();
});

// Ensure necessary modules are required at the top of the file
const path = require("path");
const { sleep } = require("sleep");
const { exec } = require("child_process");