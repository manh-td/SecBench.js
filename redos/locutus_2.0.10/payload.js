function getPayload() {
    const attack_str = new Array(30).fill("a").join("") + ".";
    return { attack_str };
}

module.exports = { getPayload };