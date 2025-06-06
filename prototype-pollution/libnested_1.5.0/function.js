function exploitFunction() {
    const payload = require('./payload.js').getPayload();
    const libnested = require("libnested");  // Import libnested here
    payload.setPrototype({});
}

module.exports = { exploitFunction };