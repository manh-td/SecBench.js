function getPayload() {
    const path = require("path");
    return "/..".repeat(50) + path.resolve(__dirname, "../flag.html");
}

module.exports = { getPayload };