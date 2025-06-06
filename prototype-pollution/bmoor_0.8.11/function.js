function exploitFunction() {
    const payload = require('./payload.js').getPayload();
    payload.setPrototypePollution();
}

module.exports = { exploitFunction };