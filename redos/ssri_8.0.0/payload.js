function getPayload() {
    const integrity =
        "sha512-00000000000000000000000000000000000000000000" +
        "?".repeat(25) +
        "\x1F";

    return { integrity };
}

module.exports = { getPayload };