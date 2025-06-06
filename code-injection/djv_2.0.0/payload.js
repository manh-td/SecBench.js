function getPayload() {
    const payload = {
        pollutePrototype: () => {
            Object.prototype.polluted = 'yes';
        }
    };

    return payload;
}

module.exports = { getPayload };