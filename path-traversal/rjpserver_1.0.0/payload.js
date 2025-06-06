const path = require('path');

function getPayload() {
    return "/..".repeat(50) + path.resolve(__dirname, "../flag.html");
}

module.exports = { getPayload };