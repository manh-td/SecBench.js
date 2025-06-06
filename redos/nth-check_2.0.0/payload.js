function getPayload() {
    let attack_str = "2n" + " ".repeat(50000) + "!";
    return { attack_str };
}

module.exports = { getPayload };