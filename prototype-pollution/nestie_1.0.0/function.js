function exploitFunction(payload) {
    const { nestie } = require("nestie");
    nestie(payload);
}

module.exports = { exploitFunction };