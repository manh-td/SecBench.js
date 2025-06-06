function getPayload() {
    const attack_str = "BGR3" + " ".repeat(40000) + "186'";
    return { attack_str };
}

module.exports = { getPayload };