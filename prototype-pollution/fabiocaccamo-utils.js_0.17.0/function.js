const utils = require("@fabiocaccamo/utils.js");

function exploitFunction(obj) {
    const payload = getPayload().setPrototypePollution;
    payload(obj);
    return obj.polluted;
}

module.exports = { exploitFunction };