function getPayload() {
    return genstr(50); // The number 50 is derived from the number of "../" in the original code
}

module.exports = { getPayload };