function getPayload() {
    const genstr = require("../utils").genstr;
    return {"a": genstr(50000, " ")}; // The payload is this JSON string
}

module.exports = { getPayload };