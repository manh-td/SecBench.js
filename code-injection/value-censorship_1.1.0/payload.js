function getPayload() {
    return `
        ;1 +(Object.prototype.polluted = 'yes')//
    `;
}

module.exports = { getPayload };