const objnest = require("objnest");  // Import objnest

function exploitFunction(payload) {
    objnest.expand(payload);  // Use objnest to expand the payload
}

module.exports = { exploitFunction };