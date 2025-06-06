function getPayload() {
    return {
        range: ["scanme.nmap.org", "x.x.$(touch libnmap)"]
    };
}

module.exports = { getPayload };