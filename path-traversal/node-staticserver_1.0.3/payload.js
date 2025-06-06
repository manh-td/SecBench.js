function getPayload() {
    // Limit the number of ".." to avoid ReDoS
    const pathToFlag = require("path").resolve(__dirname, "../flag.html");
    return "/..".repeat(10) + pathToFlag; // Reduced to 10 for safety
}

module.exports = { getPayload };