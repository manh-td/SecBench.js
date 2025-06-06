const { genstr } = require("../utils");

function getPayload() {
    return "Windows Icarus6j" + genstr(40000, " ");
}

module.exports = { getPayload };