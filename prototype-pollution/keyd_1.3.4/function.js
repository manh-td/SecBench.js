const keyd = require("keyd");

function exploitFunction(payload) {
    const keyPath = Object.keys(payload)[0];
    keyd({}).set(keyPath, payload[keyPath]);
}

module.exports = { exploitFunction };