function exploitFunction(payload) {
    const locutus = require("locutus");
    locutus.php.strings.parse_str(payload.polluted);

    return polluted;
}

module.exports = { exploitFunction };