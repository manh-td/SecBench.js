function getPayload() {
    return "encoding=" + " ".repeat(40000);
}

module.exports = { getPayload };