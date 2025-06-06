function getPayload() {
    return "--foo.__proto__.polluted yes";
}

module.exports = { getPayload };