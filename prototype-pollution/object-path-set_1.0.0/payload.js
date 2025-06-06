function getPayload() {
    const setPath = require("object-path-set");
    return {
        setPath: setPath,
        obj: {}
    };
}

module.exports = { getPayload };