function getPayload() {
    return {
        code: "1 + (this.constructor.prototype.polluted = `yes`);"
    };
}

module.exports = { getPayload };