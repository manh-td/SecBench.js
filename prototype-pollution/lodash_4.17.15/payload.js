function getPayload() {
    const lod = require("lodash"); // Import lodash
    return {
        polluted: undefined,
        setPrototypePollution: (obj) => {
            lod.set(obj, "__proto__[polluted]", "yes");
            delete obj.__proto__.polluted;
        }
    };
}

module.exports = { getPayload };