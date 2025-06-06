function getPayload() {
    let attack_str = "a" + " ".repeat(33000) + "a";
    return { attack_str };
}

module.exports = { getPayload };