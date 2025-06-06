function getPayload() {
    let attack_str = "https://" + ("." + "a".repeat(110)).repeat(7) + "\n";
    return { attack_str };
}

module.exports = { getPayload };