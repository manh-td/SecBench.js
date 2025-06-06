function getPayload() {
    return "/..".repeat(5) + path.resolve(__dirname, "../flag.html");
}

module.exports = { getPayload };