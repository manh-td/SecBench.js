function exploitFunction(payload) {
    var unflatten = require("flat").unflatten;
    unflatten(payload);
}

module.exports = { exploitFunction };